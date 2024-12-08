"use client";

import Link from "next/link";
import Image from "next/image";
import { SignUpType } from "@/types/auth";
import { Button, Checkbox, Form, Input } from "antd";
import { SignUpRules } from "@/utils/form-rules";

const SignUpPage = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <main className="flex flex-row min-h-screen">
      <div className="w-1/2 hidden md:block">
        <Image
          src="/sign-up-banner.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100vh" }}
          alt="Sign In Banner"
        />
      </div>

      <div className="w-[300px] md:w-[400px] mx-auto flex flex-col justify-center">
        <div className="fixed top-5 right-5">
          <Button variant="solid" color="default">
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
        <div className="">
          <div className="mb-5">
            <h1 className="text-3xl font-semibold mb-2">Create New Account</h1>
            <p className="text-sm text-primary300">Please enter details</p>
          </div>
          <Form
            form={form}
            onFinish={handleSubmit}
            size="large"
            layout="vertical"
          >
            <Form.Item<SignUpType>
              label="First Name"
              name="firstName"
              rules={SignUpRules.firstName}
              validateTrigger="onBlur"
            >
              <Input placeholder="Robert" />
            </Form.Item>
            <Form.Item<SignUpType>
              label="Last Name"
              name="lastName"
              rules={SignUpRules.lastName}
              validateTrigger="onBlur"
            >
              <Input placeholder="Fox" />
            </Form.Item>
            <Form.Item<SignUpType>
              label="Email Address"
              name="email"
              rules={SignUpRules.email}
              validateTrigger="onBlur"
            >
              <Input placeholder="robertfox@example.com" />
            </Form.Item>
            <Form.Item<SignUpType>
              label="Password"
              name="password"
              rules={SignUpRules.password}
              validateTrigger="onBlur"
            >
              <Input.Password placeholder="Robertfox123" />
            </Form.Item>
            <Form.Item<SignUpType>
              label="Confirm Password"
              name="confirmPassword"
              rules={SignUpRules.confirmPassword}
              validateTrigger="onBlur"
            >
              <Input.Password placeholder="Robertfox123" />
            </Form.Item>
            <div className="flex flex-row items-center justify-between mb-5">
              <Checkbox>
                I agree to the{" "}
                <Link
                  className="font-semibold text-primary500 hover:text-primary300"
                  href="#"
                >
                  Term & Conditions
                </Link>
              </Checkbox>
            </div>
            <Button
              className="w-full"
              variant="solid"
              color="default"
              htmlType="submit"
            >
              SignUp
            </Button>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
