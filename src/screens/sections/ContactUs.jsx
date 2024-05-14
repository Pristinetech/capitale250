// import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextInput from "../../components/TextInput";

const validationSchema = Yup.object({
  homeOwner_1: Yup.string().required("Home Owner"),
  homeOwner_2: Yup.string().required("Home Owner"),
  homeOwner_3: Yup.string().required("Home Owner"),
  homeOwner_4: Yup.string().required("Home Owner"),
  homeOwner_5: Yup.string().required("Home Owner"),
  homeOwner_6: Yup.string().required("Home Owner"),
  homeOwner_7: Yup.string().required("Home Owner"),
  homeOwner_8: Yup.string().required("Home Owner"),
  //   accountType: Yup.string().required("Account Type is required"),
});

const ContactUs = () => {
  return (
    <div id="about" className="container mx-auto ">
      <div className="px-4  py-10 flex flex-col lg:flex-row justify-between my-20">
        <h1 className="text-4xl font-bold text-red-700">Request a quote.</h1>
        <p className="text-xl text-gray-500  max-w-[36rem] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida.
        </p>
      </div>

      <div className="max-w-5xl mx-auto shadow-sm overflow-hidden bg-white p-16">
        <div className="text-sm text-gray-500 w-fit mx-auto leading-8">
          <p className=" text-[24px]">
            Please complete the form below, to request a quote, and we{`'`}ll be
            in touch.
          </p>
          <p className=" text-[24px]">
            Or you can call us on 3322 and our specialists will provide the
            necessary help!
          </p>
        </div>
        <Formik
          initialValues={{
            homeOwner_1: "",
            homeOwner_2: "",
            homeOwner_3: "",
            homeOwner_4: "",
            homeOwner_5: "",
            homeOwner_6: "",
            homeOwner_7: "",
            homeOwner_8: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // handle form submission
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="grid grid-cols-2 gap-10 px-6 pt-4 pb-6">
                <TextInput
                  placeholder="Home Owner"
                  id={"homeOwner_1"}
                  name="homeOwner_1"
                  errors={errors}
                  touched={touched}
                />
                <TextInput
                  placeholder="Home Owner"
                  id={"homeOwner_2"}
                  name="homeOwner_2"
                  errors={errors}
                  touched={touched}
                />
                <TextInput
                  placeholder="Home Owner"
                  id={"homeOwner_3"}
                  name="homeOwner_3"
                  errors={errors}
                  touched={touched}
                />
                <TextInput
                  placeholder="Home Owner"
                  id={"homeOwner_4"}
                  name="homeOwner_4"
                  errors={errors}
                  touched={touched}
                />
                <TextInput
                  placeholder="Home Owner"
                  id={"homeOwner_5"}
                  name="homeOwner_5"
                  errors={errors}
                  touched={touched}
                />
                <TextInput
                  placeholder="Home Owner"
                  id={"homeOwner_6"}
                  name="homeOwner_6"
                  errors={errors}
                  touched={touched}
                />
                <TextInput
                  placeholder="Home Owner"
                  id={"homeOwner_7"}
                  name="homeOwner_7"
                  errors={errors}
                  touched={touched}
                />
                <TextInput
                  placeholder="Home Owner"
                  id={"homeOwner_8"}
                  name="homeOwner_8"
                  errors={errors}
                  touched={touched}
                />
              </div>
              <div className="px-6 space-y-10 my-8 mb-20">
                <h2 className="text-4xl font-bold">Service of interest</h2>
                <div className="mb-4 max-w-2xl flex justify-between">
                  <div className="flex items-center">
                    <Field
                      type="checkbox"
                      id="checkbox1"
                      name="checkbox1"
                      className="w-6 h-6 mr-2"
                    />
                    <label htmlFor="checkbox1" className="text-xl">
                      Security services
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Field
                      type="checkbox"
                      id="checkbox2"
                      name="checkbox2"
                      className="w-6 h-6 mr-2"
                    />
                    <label htmlFor="checkbox2" className="text-xl">
                      Cash services
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Field
                      type="checkbox"
                      id="checkbox3"
                      name="checkbox3"
                      className="w-6 h-6 mr-2"
                    />
                    <label htmlFor="checkbox3" className="text-xl">
                      Internet services
                    </label>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-4 text-right w-full">
                <button
                  type="submit"
                  className="w-full px-4 py-2 rounded-md bg-red-600 text-white font-medium hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Submit request
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactUs;
