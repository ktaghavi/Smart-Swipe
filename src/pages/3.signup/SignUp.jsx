import './SignUp.css';

const SignUp = ({users, setUsers}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    .then (r => r.json())
    .then (data => setUsers([...users, data]))
  };

  return (
    <div className='parent'>
      <div className='div1'>
        <b>
        <h1 style={{fontSize: '1.5rem', paddingBottom: '10px'}}>
        Sign Up!
        </h1>
        </b>
        <form onSubmit={handleSubmit} className='form'>
            <div>
            {/* <label>Username</label> */}
            <input type="text" name="username" placeholder='Username' style={{margin: '10px'}}></input>
            {/* <label>Password</label> */}
            <input type="password" name="password" placeholder='Password'></input>
            </div>

            <div>
            {/* <label>Email</label> */}
            <input type="email" name="email" placeholder='Email 'style={{margin: '10px'}}></input>
            <label>Date of Birth</label>
            <input type="date" name="dob" placeholder='DOB'></input>
            </div>

            <div>
            <label>Sex</label>
            <select name="sex" style={{margin: '10px'}}>
                <option value="Man">Man</option>
                <option value="Woman">Woman</option>
                <option value="Other">Other</option>
            </select>
            <label>Interested in </label>
            <select name="interestedIn" style={{margin: '10px'}}>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Other">Other</option>
            </select>
            </div>
            <div>
              <button type="submit">Sign Up</button>
            </div>
  </form>
    </div>
    </div>
  )
}

export default SignUp

