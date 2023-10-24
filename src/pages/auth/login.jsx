import { userLogin, loginSchema } from "@/utils/api/auth/";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToken } from "@/utils/contexts/token";
import ImgLogin from "@/assets/img-login.png";
import { Input } from "@/components/input";
import { useForm } from "react-hook-form";
import Layout from "@/components/layout";
import Button from "@/components/button";
import { toast } from "react-toastify";

export default function Login() {
  const { changeToken } = useToken();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  async function handleLogin(data) {
    try {
      const result = await userLogin(data);
      toast.success("Successfully login");
      changeToken(JSON.stringify(result.payload));
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
          <h1 className="py-2 text-xl text-center">Log in to continue!</h1>
          <form aria-label="form-login" onSubmit={handleSubmit(handleLogin)}>
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
