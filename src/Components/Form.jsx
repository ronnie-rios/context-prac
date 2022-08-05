import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Form() {
    const [form, setForm] = useState(null);
    const navigate = useNavigate()

    function formHandler(e) {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    }

    function submitHandler(e) {
        e.preventDefault();
        navigate('/confirmation')
    }
  return (
    <div>
        <h4>enter your credentials</h4>
        <form>
            <input
                type='text'
                placeholder='enter your name'
                name='fullname'
            />
             <input
                type='text'
                placeholder='enter your address'
                name='address'
            />
             <input
                type='text'
                placeholder='enter your payment'
                name='payment'
            />
        </form>
    </div>
  )
}
