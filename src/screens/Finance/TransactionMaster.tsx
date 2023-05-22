import React from 'react'
import { FinanceAPI } from '../../API/Finance/FinanceApi'
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';

function TransactionMaster() {
    const columns = [
        { key: 'financialTransactionId', name: 'ID' },
        { key: 'transactionTypeId', name: 'Title' },
        { key: 'transactionAmount', name: 'Amount' },
        { key: 'transactionDetails', name: 'Details' },
      ];
    const [transaction, setTransaction] = React.useState([{}]);
    React.useEffect(() => {
        const fetchUserEmail = async () => {
            const response = await FinanceAPI.getAllTransaction()
            setTransaction(response);
        };
        fetchUserEmail();
    }, []);
    return (
        <>
            <div className="d-flex align-items-start">
                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
                    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
                    <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
                    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        {/* {transaction.map((item:any,index) => {
                            return <div key="{index}" >{item.transactionDetails}</div>
                        })} */}
                        <div style={{width:'90vw'}}>
                        <DataGrid columns={columns} rows={transaction} />
                        </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                </div>
            </div>
        </>
    )
}

export default TransactionMaster