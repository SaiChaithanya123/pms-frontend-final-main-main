import React from 'react'
import { getBankByIdService, addBankService, deleteBankService, updateBankService } from './services/BankService';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getBankById, addbankdetails, deletebankbyaccno, updatebankdetails } from '../redux/BankSlice';
import axios from 'axios';

const BankData = (props) => {
    const [accno, setAccno] = useState('');
    const dispatch = useDispatch();
    const bankDataFromStore = useSelector((state) => state.bank.bankState);
    const [newBankObj, setNewBankObj] = useState('');
    const [displayAddObj, setDisplayAddObj] = useState('');
    const [displyUpdateBank, setDisplayUpdateBank] = useState('');
    const [updateBank, setUpdateBank] = useState({ accno: '', bankName: '', branch: '', ifscCode: '', accHolderName: '' });

    const handleBank = (e) => {
        console.log('handleEmp');
        setAccno(e.target.value);
    }
    const handleAddbank = (e) => {
        console.log(e.target.value);
        setNewBankObj({
            ...newBankObj,
            [e.target.name]: e.target.value
        });
    }
    const handleUpdateBank = (e) => {
        console.log(e.target.value);
        setUpdateBank({
            ...updateBank,
            [e.target.name]: e.target.value
        });
    }

    const submitGetBankById = (evt) => {
        evt.preventDefault();
        console.log('submitGetBankById');
        getBankByIdService(accno)
            .then((response) => { dispatch(getBankById(response.data)) })
            .catch(() => {
                alert(`Bank with accno: ${accno} not found.`);
            });
        setAccno('');
    }
    const submitDeleteBankById = (evt) => {
        evt.preventDefault();
        console.log('submitDeleteBankById');
        deleteBankService(accno)

            .then((response) => {
                dispatch(deletebankbyaccno(response.data))
                alert('Bank account Deleted Successfully ');
            })

            .catch(() => {
                alert(`Bank with accno: ${accno} not found.`);
            });
        setAccno('');
    }
    const addbankdetails = (evt) => {
        evt.preventDefault();
        axios.post(`addbankdetails`, newBankObj)
            .then((response) => {
                setDisplayAddObj(response.data);
                alert('Bank Details  added successfully.');
                setNewBankObj({ accno: '', bankName: "", branch: "", ifscCode: "", accHolderName: "" })
            })
            .catch(() => {
                alert("Bank could not be added.");
            });
    }


    // const updatebankdetails = (evt) => {
    //     evt.preventDefault();
    //     axios.post(`updatebankdetails`, updateBank)
    //         .then((response) => {
    //             setDisplayUpdateBank(response.data);
    //             alert('Bank Details update successfully.');
    //             setDisplayUpdateBank({ accno: '', bankName: "", branch: "", ifscCode: "", accHolderName: "" })
    //         })
    //         .catch(() => {
    //             alert("Bank could not be updated.");
    //         });
    // }
    const updatebankdetails = (event) => {
        axios.put(`/updatebankdetails`, updateBank)
            .then((response) => {
                setDisplayUpdateBank(response.data);
                alert('Bank Details update successfully.');
            }).catch(() => {
                alert("Bank could not be updated.");
                setUpdateBank('')

            });
        event.preventDefault();

    }


    return (
        <div className="containing">
            {/* <h1 className="display-5 text-warning mt-5 mb-5" >Bank Component</h1> */}


            <div className="col-6 border border-light shadow p-3 mb-5 bg-white  amresh">
                <p>Add Bank Account</p>


                {/* <form className="form form-group form-primary" onSubmit={addbankdetails}> */}
                <input className="form-control mt-4" type="number" pattern="[0-9]{10}" min='1' class="form-control" id="accno" name="accno" value={newBankObj.accno} onChange={handleAddbank} placeholder="Enter accno" required autoFocus />
                <input className="form-control mt-4" type="text" pattern="[a-zA-Z]{2,7}$" class="form-control" id="bankName" name="bankName" value={newBankObj.bankName} onChange={handleAddbank} placeholder="Enter bankName " required autoFocus />
                <input className="form-control mt-4" type="text" pattern="[a-zA-Z]{2,7}$" class="form-control" id="branch" name="branch" value={newBankObj.branch} onChange={handleAddbank} placeholder="Enter branch " required autoFocus />
                <input className="form-control mt-4" type="text" pattern="[a-zA-Z]{3,10}$" class="form-control" id="accHolderName" name="accHolderName" value={newBankObj.accHolderName} onChange={handleAddbank} placeholder="Enter accHolderName " required autoFocus />
                <input className="form-control mt-4" type="text" pattern="[A-Z]{1,5}0[A-Z0-9]{1,5}$" class="form-control" id="ifscCode" name="ifscCode" value={newBankObj.ifscCode} onChange={handleAddbank} placeholder="Enter ifsccode" required autoFocus />


                <input className="form-control mt-4 btn btn-primary" type="submit" value="Add Bank" onClick={addbankdetails} />
                {/* </form> */}
                <table className="table table-sm table-light table-striped">
                    <thead>
                        <tr>
                            <th>Accno </th>
                            <th>BankName</th>
                            <th>Branch</th>
                            <th>AccoundHolderName</th>
                            <th>ifcsCode</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{displayAddObj.accno}</td>
                            <td>{displayAddObj.bankName}</td>
                            <td>{displayAddObj.branch}</td>
                            <td>{displayAddObj.accHolderName}</td>
                            <td>{displayAddObj.ifscCode}</td>


                        </tr>
                    </tbody>
                </table>
            </div>





            <div className="col-6 border border-light shadow p-3 mb-5 bg-white amresh">
                <p>Search Bank Account</p>
                <form className="form form-group form-primary" onSubmit={submitGetBankById}>
                    <input className="form-control mt-4" type="number" pattern="[0-9]{10}" min='1' id="accno" name="accno" value={accno} onChange={handleBank} placeholder="Enter accno to search" />
                    <input className="form-control mt-4 btn btn-primary" type="submit" value="Find Bank" />
                </form>
                <table className="table w-auto small table table-light table-striped ">
                    <thead>
                        <tr>
                            <th>Accno </th>
                            <th>BankName</th>
                            <th>Branch</th>
                            <th>AccoundHolderName</th>
                            <th>ifcsCode</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{bankDataFromStore.accno}</td>
                            <td>{bankDataFromStore.bankName}</td>
                            <td>{bankDataFromStore.branch}</td>
                            <td>{bankDataFromStore.accHolderName}</td>
                            <td>{bankDataFromStore.ifscCode}</td>


                        </tr>
                    </tbody>
                </table>
            </div>

            {/* <p>--------------------</p> */}

            <div className="containing">

                <div className="col-6 border border-light shadow p-3 mb-5 bg-white amresh">
                    <p>Remove Bank Account</p>
                    <form className="form form-group form-primary" onSubmit={submitDeleteBankById}>
                        <input className="form-control mt-4" type="number" pattern="[0-9]{10}" min='1' id="accno" name="accno" value={accno} onChange={handleBank} placeholder="Enter accno to Delete" />
                        <input className="form-control mt-4 btn btn-danger" type="submit" value="Remove Bank" />
                    </form>


                </div>


                {/* <p>-----------------------------------------------------------------------------------------------------</p> */}


            </div>


            {/* <p>-------------------------------------------------</p> */}
            <div className="containing">
                <div className="col-6 border border-light shadow p-3 mb-5 bg-white amresh">
                    <p>Update Bank Account</p>

                    <input className="form-control mt-4" type="text" pattern="[0-9]{10}" min='1' class="form-control" id="accno" name="accno" value={updateBank.accno} onChange={handleUpdateBank} placeholder="Enter accno to" />
                    <input className="form-control mt-4" type="text" pattern="[a-zA-Z]{2,7}$" class="form-control" id="bankName" name="bankName" value={updateBank.bankName} onChange={handleUpdateBank} placeholder="Enter bankName to " />
                    <input className="form-control mt-4" type="text" pattern="[a-zA-Z]{2,7}$" class="form-control" id="branch" name="branch" value={updateBank.branch} onChange={handleUpdateBank} placeholder="Enter branch to " />
                    <input className="form-control mt-4" type="text" pattern="[a-zA-Z]{3,10}$" class="form-control" id="accHolderName" name="accHolderName" value={updateBank.accHolderName} onChange={handleUpdateBank} placeholder="Enter accHolderName to" />
                    <input className="form-control mt-4" type="text" pattern="[A-Z]{1,5}0[A-Z0-9]{1,5}$" class="form-control" id="ifscCode" name="ifscCode" value={updateBank.ifscCode} onChange={handleUpdateBank} placeholder="Enter ifsccodeto " />

                    <input className="form-control mt-4 btn btn-primary" type="submit" value="Update Bank" onClick={updatebankdetails} />
                    <table className="table w-auto small table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>accno </th>
                                <th>BankName</th>
                                <th>Branch</th>
                                <th>AccoHolderName</th>
                                <th>ifcsCode</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{displyUpdateBank.accno}</td>
                                <td>{displyUpdateBank.bankName}</td>
                                <td>{displyUpdateBank.branch}</td>
                                <td>{displyUpdateBank.accHolderName}</td>
                                <td>{displyUpdateBank.ifscCode}</td>


                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>


        </div>

    );
}
export default BankData;