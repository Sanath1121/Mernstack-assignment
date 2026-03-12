import { useState } from "react";
import { useForm } from "react-hook-form";

function FormDemo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log(errors)
  // Form Submission
  let [userList, setUsers] = useState([]);
  const submitForm = (obj) => {
    // console.log(obj);
    setUsers([...userList, obj]);
  };
    //   console.log(userList);


  return (
    <div className=" h-screen text-center  border-2 w-150 mx-auto mt-4 bg-blue-100">
      <h1>Form</h1>
      <div className="text-center">
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="mb-2 align-text-top">
            <input
              type="text"
              {...register("firstName")`4`}
              placeholder="First name"
              className="bg-gray-300 border-2"
            />
          </div>
          <div className="mb-2 text-center">
            <input
              type="text"
              {...register("lastName")}
              placeholder="Last name"
              className="bg-gray-300 border-2"
            />
          </div>

          <div className="mb-2 text-center">
            <input
              type="email"
              {...register("email")}
              placeholder="Enter Email"
              className="bg-gray-300 border-2"
            />
          </div>
          <div className="mb-2 text-center">
            <input
              type="date"
              {...register("dob")}
              placeholder="Enter Date of Birth"
              className="bg-gray-300 border-2"
            />
          </div>

          <div className="mb-2 text-center">
            <button
              type="submit"
              className="bg-yellow-200 text-shadow-white p-1 border-2"
            >
              Add New User
            </button>
          </div>
        </form>
      </div>
      <br />
      <br />
      <div className="text-center justify-center">
        <h1 className="text-3xl"><b><u>Users Table</u></b></h1><br />
        <table className="w-full border-2">
                    <thead><tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr></thead>
                    <tbody>
                        {
                            userList.map((userObj,i)=>(
                                <tr key={i}>
                                <td>{userObj.firstName}</td>
                                <td>{userObj.lastName}</td>
                                <td>{userObj.email}</td>
                                <td>{userObj.dob}</td>
                                </tr>
                            ))

                        }
                    </tbody>
                </table>
      </div>
    </div>
  );
}

export default FormDemo;
