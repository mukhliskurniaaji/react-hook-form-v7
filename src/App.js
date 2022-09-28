import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';


function App() {
  const [userInfo, setUserInfo] = useState();
  const { register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = (data) => {
    setUserInfo(data);
  };

  return (
    <div className="container">
          <pre>{JSON.stringify(userInfo,undefined, 2)}</pre>
           <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Register Form</h1>
            <div className='ui divider'></div>
            <div className='ui form'>
              <div className='field'>
                <label>Username</label>
                <input 
                  type="text" 
                  name="username"
                  placeholder="Username" 
                  {...register("username", {
                    required: "Username is required!", 
                  })}
                />
              </div>
              <p>{errors.username && <span>{errors.username.message}</span>}</p>
              <div className='field'>
                <label>Email</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  { ...register("email", {
                    required: "Email is required!",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address"
                    }
                  })}
                />
              </div>
              <p>{errors.email && <span>{errors.email.message}</span>}</p>
              <div className='field'>
                <label>Password</label>
                <input 
                  type="password" 
                  name="password"
                  placeholder="Password" 
                  {...register("password", {
                    required:  "Password is required!",
                    minLength : {
                      value: 4,
                      message: "Your password must be more than 2 characters!"
                    },
                    maxLength : {
                      value: 10,
                      message: "Your password must be less than 6 characters!"
                    }
                  })}
                />
              </div>
              <p>{errors.password && <span>{errors.password.message}</span>}</p>
              <input type="submit" className='fluid ui button blue' value="Submit" />
            </div>
           </form>
    </div>
  );
}

export default App;
