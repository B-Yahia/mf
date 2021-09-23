import RegisterBusiness from "./RegisterBusiness/RegisterBusiness";
import MainPageFooter from "../MainPage/MainPageFooter/MainPageFooter";
import BarMenu from "./BarMenu/BarMenu";
import SignupForm from "./SignupForm/SignupForm";

function SignupPage (){
    return(
        <div>
            
            <BarMenu/>
            <SignupForm/>
            <RegisterBusiness/>
            <MainPageFooter />
            
        </div>
    )
}

export default SignupPage;