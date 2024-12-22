import UseEffect from "./_hooks/UseEffect";
import UseState from "./_hooks/UseState";
import UseContext from "./_hooks/UseContext";
import UseReducer from "./_hooks/UseReducer";
import UseRef from "./_hooks/UseRef";
import UseMemo from "./_hooks/UseMemo";
import UseCallback from "./_hooks/UseCallback";
import UseLayoutEffect from "./_hooks/UseLayoutEffect";
import ParentComponent from "./_hooks/UseImperativeHandle";
import UseDebugValue from "./_hooks/UseDebugValue";

export default function Hooks() {
    return (
        <div id="materi-hooks">
            <hr />
            <h1>Hooks!</h1>
            <hr />
            <UseState />
            <hr />
            <UseEffect />
            <hr />
            <UseContext />
            <hr />
            <UseReducer />
            <hr />
            <UseRef />
            <hr />
            <UseMemo />
            <hr />
            <UseCallback />
            <hr />
            <UseLayoutEffect />
            <hr />
            <ParentComponent />
            <hr />
            <UseDebugValue />
            <hr />
        </div>
    );
}
