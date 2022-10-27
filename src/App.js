import './App.css';
import Header from "./components/Header/Header";

const caseData = [
    {
        id: 1,
        name: 'Simple payment'
    },
    {
        id: 2,
        name: 'Family Allowance'
    },
    {
        id: 3,
        name: 'Pay for parking or rent transport'
    },
    {
        id: 4,
        name: 'Subscriptions'
    },
    {
        id: 5,
        name: 'Company RSUs'
    },
    {
        id: 6,
        name: 'Pension Plan Payments'
    },
    {
        id: 7,
        name: 'Rent Payments'
    },
    {
        id: 8,
        name: 'Donations'
    },
    {
        id: 9,
        name: 'Inheritance'
    },
]

function App() {
    return (
        <div className="App">
            <div className='background'>
                {/*
                <Header/>
*/}
                <div className='content__wrapper'>
                    <div className='content_title'>
                        New streaming<br/>payment system
                    </div>
                    <div className='select_wrap'>
                        <select className='select'>
                            <option className='select_option' style={{color: 'grey'}}>CHOSE CASE</option>
                            {caseData.map(item => (
                                    <option className='select_option' key={item.id}>{item.name}</option>
                                )
                            )}
                        </select>
                    </div>
                    <div className='button_wrap'>
                        <button>Let's start</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
