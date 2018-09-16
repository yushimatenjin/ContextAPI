import React, {Component, createContext} from 'react';
import logo from './logo.svg';
import './App.css';

const Context = createContext()
const {Provider, Consumer} = Context

class App extends Component {
    render() {
        return (
            <Provider
                value="Thanks"
            >
                <ThanksComponent />
                <ThanksComponent2 />
            </Provider>
        );
    }
}
const ThanksComponent = () => (
    <Consumer>
        {
            (val) =>{
                  return <div>{val}</div>
            }
        }

    </Consumer>
)

const ThanksComponent2 = () => (
    <Consumer>
        {
            (val) =>{
                console.log(this)
                return <div>{val}</div>
            }
        }
    </Consumer>
)
export default App;
