"use client";

import Link from "next/link";
import Image from "next/image";
import { SignInType } from "@/types/auth";
import { Button, Checkbox, Form, Input } from "antd";
import { SignInRules } from "@/utils/form-rules";

const SignInPage = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <main className="flex flex-row min-h-screen items-center">
      <div className="w-3/5 hidden md:block">
        <Image
          src="/sign-in-banner.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100vh" }}
          alt="Sign In Banner"
        />
      </div>

      <div className="w-[300px] md:w-[400px] mx-auto">
        <div className="mb-5">
          <h1 className="text-3xl font-semibold mb-2">Welcome👋</h1>
          <p className="text-sm text-primary300">Please login here</p>
        </div>
        <Form
          form={form}
          onFinish={handleSubmit}
          size="large"
          layout="vertical"
        >
          <Form.Item<SignInType>
            label="Email Address"
            name="email"
            rules={SignInRules.email}
          >
            <Input placeholder="robertfox@example.com" />
          </Form.Item>
          <Form.Item<SignInType>
            label="Password"
            name="password"
            rules={SignInRules.password}
          >
            <Input.Password placeholder="Robertfox123*%" />
          </Form.Item>
          <div className="flex flex-row items-center justify-between mb-5">
            <Checkbox>Remember me</Checkbox>
            <Link href="#" className="text-primary500 hover:text-primary300">
              Forgot Password?
            </Link>
          </div>
          <Button
            className="w-full"
            variant="solid"
            color="default"
            htmlType="submit"
          >
            Login
          </Button>
        </Form>
      </div>
    </main>
  );
};

export default SignInPage;