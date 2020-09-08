import React from "react";

class Navigate extends React.Component {

    constructor(props) {
        super(props);
    }

    to(history, feature) {

        switch (feature) {
            case "login":
                history.push("/login")
                break;

            case "goals":
                history.push("/home/report/activity/goals")
                break;

            case "activities":
                history.push("/home/report/activity/activities")
                break;

            case "activity":
                history.push("/home/report/activity")
                break;

            case "manager":
                history.push("/home/system/manager")
                break;

            case "generate":
                history.push("/home/report/generate")
                break;

            case "recover":
                history.push("/password/recover")
                break;

            case "renew":
                history.push("/password/renew")
                break;

                case "configuration":
                history.push("/home/system/manager/configuration")
                break;

            default:
                break;
        }

    }

    render() {
        return null
    }
}
export default new Navigate();
