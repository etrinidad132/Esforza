import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

const modalReducer = (state = [], action) => {
    Object.freeze(state)
    // debugger
    let newState = [];
    switch (action.type) {
        case OPEN_MODAL:
            newState = Array.from(state)
            newState.push(action.modal)
            return newState;
        case CLOSE_MODAL:
            return [];
        default:
            return state;
    }
}

export default modalReducer;


// const App = () => (
//     <div>
//         <Modal />
//         <header>
//             <Link to="/" className="header-link">
//                 <h1>Bench BnB</h1>
//             </Link>
//             <GreetingContainer />
//         </header>
//         <Switch>
//             <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
//             <Route path="/benches/:benchId" component={BenchShowContainer} />
//             <Route exact path="/" component={SearchContainer} />
//         </Switch>
//     </div>
// );