import { userRegister, registerSchema } from "@/utils/api/auth/";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import ImgLogin from "@/assets/img-login.png";
import { Input } from "@/components/input";
import { useForm } from "react-hook-form";
import Layout from "@/components/layout";
import Button from "@/components/button";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  async function handleRegister(data) {
    try {
      const result = await userRegister(data);
      toast.success(result.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <Layout>
      <div className="flex justify-center w-4/5 mx-auto space-x-4">
        <div className="px-10">
          <img
            src={ImgLogin}
            alt="image-hero"
            width={300}
            height={100}
            className="rounded-lg"
          />
        </div>
        <div className="w-2/5">
          <h1 className="pt-5 text-5xl text-center">Welcome to Wardrobe-Fit</h1>
          <h1 className="py-2 text-xl text-center">
            Registration to continue!
          </h1>
          <form
            aria-label="form-register"
            onSubmit={handleSubmit(handleRegister)}
          >
            <Input
              id="input-username"
              aria-label="input-username"
              label="Username"
              name="username"
              register={register}
              error={errors.username?.message}
            />
            <Input
              id="input-password"
              aria-label="input-password"
              label="Password"
              name="password"
              register={register}
              error={errors.password?.message}
              type="password"
            />
            <Input
              id="input-repassword"
              aria-label="input-repassword"
              label="Retype Password"
              name="repassword"
              register={register}
              error={errors.repassword?.message}
              type="password"
            />
            <Button
              aria-label="btn-submit"
              label="Submit"
              type="submit"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
              className="w-full bg-[#0D0C22] text-gray-100 p-3 rounded-full my-3 hover:bg-[#565564]"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
}
