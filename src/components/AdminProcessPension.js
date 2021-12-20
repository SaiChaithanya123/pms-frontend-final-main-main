import { getPensionService } from "./services/ProcessPensionService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getPensionServices } from '../redux/ProcessPensionSlice';

import { Store } from "redux";
import { Provider } from "react";

const ProcessPensionModule = () => {
    const [newPensionObj, setNewPensionObj] = useState('');
    const dispatch = useDispatch();
    const pensionDataFromStore = useSelector((state) => state.processPension.processPensionState);

    const handlePension = (e) => {
        console.log(e.target.value);
        setNewPensionObj({
            ...newPensionObj,
            [e.target.name]: e.target.value
        });
    }


    const submitGetPension = (evt) => {
        evt.preventDefault();
        console.log('submitGetPension');
        getPensionService(newPensionObj)
            .then((response) => { dispatch(getPensionServices(response.data)) })
            .catch(() => {
                alert(`Pension not found.`);
            });

        setNewPensionObj('');

    }


    return (
        <div className="containing1">
            <div className="col-5 border border-light shadow p-3 mb-5 bg-white wi5">
                <form className="form form-group form-primary" onSubmit={submitGetPension}>
                    <input className="form-control mt-3" type="text" id="name" name="name" value={newPensionObj.name} onChange={handlePension} placeholder="Enter name" autoFocus required />
                    <input className="form-control mt-3" type="number" id="pan" name="pan" value={newPensionObj.pan} onChange={handlePension} placeholder="Enter pan" autoFocus required />
                    <input className="form-control mt-3" type="number" id="aadhar" name="aadhar" value={newPensionObj.aadhar} onChange={handlePension} placeholder="Enter aadhar" autoFocus required />
                    <input className="form-control mt-3" type="text" id="type" name="type" value={newPensionObj.type} onChange={handlePension} placeholder="Enter type" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Pension" />
                </form>
            </div>
            <p>

            </p>
            <table className="table w-auto small table table-light table-striped wi5">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>amount</th>
                        <th>charges</th>
                        <th>Type</th>
                        <th>Status</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{pensionDataFromStore.pensioner_id}</td>
                        <td>{pensionDataFromStore.amount}</td>
                        <td>{pensionDataFromStore.charges}</td>
                        <td>{pensionDataFromStore.bankType}</td>
                        <td>{pensionDataFromStore.statusCode}</td>


                    </tr>
                </tbody>
            </table>



        </div>
    );

}
export default ProcessPensionModule;