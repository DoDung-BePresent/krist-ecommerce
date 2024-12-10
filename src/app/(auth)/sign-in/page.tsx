"use client";

import Link from "next/link";
import Image from "next/image";
import { SignInType } from "@/types";
import { Button, Checkbox, Form, Input } from "antd";
import { SignInRules } from "@/utils/form-rules";

const SignInPage = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <main className="flex min-h-screen flex-row">
      <div className="hidden w-1/2 md:block">
        <Image
          src="/sign-in-banner.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100vh" }}
          alt="Sign In Banner"
        />
      </div>

      <div className="mx-auto flex w-[300px] flex-col justify-center md:w-[400px]">
        <div className="fixed right-5 top-5">
          <Button variant="solid" color="default">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
        <div className="">
          <div className="mb-5">
            <h1 className="mb-2 text-3xl font-semibold">
              Welcome
              <span className="inline-block animate-wave text-3xl">👋</span>
            </h1>
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
              validateTrigger="onBlur"
            >
              <Input placeholder="robertfox@example.com" />
            </Form.Item>
            <Form.Item<SignInType>
              label="Password"
              name="password"
              rules={SignInRules.password}
              validateTrigger="onBlur"
            >
              <Input.Password placeholder="Robertfox123" />
            </Form.Item>
            <div className="mb-5 flex flex-row items-center justify-between">
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
      </div>
    </main>
  );
};

export default SignInPage;
