import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import YGimage from './YG-LOGO.png'
import { addLogin } from '../../Service/api';
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom';
const Login = () => {
	const history = useHistory();
	const initialValues = {id:"", password:""}
	

	const [FormValues, setFormValues] = useState(initialValues);    
      const [formErrors, setFormErrors] = useState({});    
      const [ItemList, setItemList] = useState([]);    
      const [isSubmit, setIsSubmit] = useState(false);

	  let handleChange = (e) => {
		const {name, value} = e.target;
		setFormValues({ ...FormValues, [name]: value});
		console.log(FormValues)
	}
	const validate = (values) => {
		const errors =  {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.id) {
			errors.id = "id is required!";
		  }		  
		if (!values.password) {
			errors.id = "password is required!";
		  }		  
		  return errors
	
	}
	var nowError

	let handleSubmit = async (e) => {
		
		e.preventDefault(); 

		setFormErrors(validate(FormValues))
		setIsSubmit(true);

		console.log(FormValues)        
		let cookiesNow = await addLogin(FormValues);

		console.log(cookiesNow.data)
		if(cookiesNow.data.status == "Sucess"){
			Cookies.set('token', cookiesNow.data.token)
		Cookies.set('empID', cookiesNow.data.data.empID)
		Cookies.set('id', cookiesNow.data.data.id)
			history.push('/') 
		}else{
			nowError = cookiesNow.data.error
			console.log(nowError)
		}
	}

	useEffect(() => {
		if (Object.keys(formErrors).length === 0 && isSubmit) {
		  console.log(FormValues);
		}
	  }, [formErrors]);

  return (
    <div>
        {/* <!-- Page content --> */}
	<div class="page-content">

		{/* <!-- Main content --> */}
		<div class="content-wrapper">

			{/* <!-- Content area --> */}
			<div id="logbox" class="content">

				{/* <!-- Login form --> */}
           {/* <pre>{JSON.stringify(FormValues, undefined, 2)}</pre>                       */}

				<form class="login-form"  onSubmit={handleSubmit}>

					<div  class="card mb-0">
						<div  class="card-body">
							<div class="text-center mb-3">
                                <img class="myLogo" src={YGimage} alt="Logo" />
								{/* <i class="icon-reading icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1"></i> */}
								<h5 class="mb-0">Login to your account</h5>
								<span class="d-block text-muted">Enter your credentials below</span>
							</div>

							<div class="form-group form-group-feedback form-group-feedback-left">
								<input type="text" name="id" class="form-control" values={FormValues.id} onChange={handleChange} placeholder="Username"/>
                            	<p>{formErrors.id}</p>  
								<div class="form-control-feedback">
									<i class="icon-user text-muted"></i>
								</div>
							</div>

							<div class="form-group form-group-feedback form-group-feedback-left">
								<input type="password" name="password" class="form-control" values={FormValues.password} onChange={handleChange} placeholder="Password"/>
                            	<p>{formErrors.password}</p>  								
								<div class="form-control-feedback">
									<i class="icon-lock2 text-muted"></i>
								</div>
							</div>

							<div class="form-group">
								<button type="submit"  class="btn btn-primary btn-block">Sign in <i class="icon-circle-right2 ml-2"></i></button>
							</div>

							
							
							
							<div class="text-center">
								<a href="/">Forgot password?</a>
							</div>
						</div>
					</div>
				</form>
				{/* <!-- /login form --> */}

			</div>
			{/* <!-- /content area --> */}	

		</div>
		{/* <!-- /main content --> */}
	</div>
    	{/* <!-- /page content --> */}
    </div>
  )
}

export default Login