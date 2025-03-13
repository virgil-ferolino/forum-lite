import LoginForm from "@/app/components/form/LoginForm";

const Login = () => {
  return (
    <div className="card w-full max-w-[480px] bg-white">
      <div className="card-title p-5 w-full flex justify-center bg-slate-600 rounded-t-2xl">
        <p className="text-4xl text-white">LOGIN</p>
      </div>
      <div className="card-body">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
