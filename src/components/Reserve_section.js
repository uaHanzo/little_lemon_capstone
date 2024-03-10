import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { FormControl, FormErrorMessage, Input, Select, Textarea } from "@chakra-ui/react";
import reserve_photo_1 from "../images/reserve_photo_1.jpg"
import reserve_photo_2 from "../images/reserve_photo_2.jpg"
import "./Reserve_section.css"

function Reserve_section() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            guests: "",
            date: "",
            time: "",
            location: "",
            firstName: "",
            lastName: "",
            email: "",
            comment: "",
        },
        onSubmit: (values) => { confirm(values) },
        validationSchema: Yup.object({
            guests: Yup.string().required("Select number of guests"),
            date: Yup.string().required("Enter date of reservation"),
            time: Yup.string().required("Select time of reservation"),
            location: Yup.string().required("Select table location"),
            firstName: Yup.string().required("Enter your First Name"),
            lastName: Yup.string().required("Enter your Last Name"),
            email: Yup.string().email("Email not valid").required("Enter your Email"),
        }),
    });

    function confirm(values) {
        const page = createRoot(document.getElementById("reserve_div"));
        page.render(<Reserve_confirm values={values} />)
    }

    function Reserve_confirm({ values }) {
        const message = `Thank you ${values.firstName}, for booking a table. We are waiting for you in Little Lemon`
        return (
            <div className="confirm_message">
                <h1 className="sub_title t_cm">{message}</h1>
                <button className="button b_cm" onClick={() => { navigate("/") }}>Return</button>
            </div>
        )
    }

    function dropdown_handler(e) {
        if (e.target.id === "guests") {
            document.getElementById("res_guests").className += " pressed";
        } else if (e.target.id === "time") {
            document.getElementById("res_time").className += " pressed";
        } else {
            document.getElementById("res_loc").className += " pressed";
        }
    }

    function date_pressed() {
        document.getElementById("res_date").className += " pressed";
    }

    useEffect(() => {
        if (formik.touched.guests) {
            document.getElementById("res_guests").className += " error_border";
        }
        if (formik.touched.date) {
            document.getElementById("res_date").className += " error_border";
        }
        if (formik.touched.time) {
            document.getElementById("res_time").className += " error_border";
        }
        if (formik.touched.location) {
            document.getElementById("res_loc").className += " error_border";
        }
    }, [!formik.touched.guests, !formik.touched.date, !formik.touched.time, !formik.touched.location]);

    return (
        <section>
            <div className="reserve_section">
                <form onSubmit={formik.handleSubmit} className="reserve" id="reserve_div">
                    <div>
                        <div id="res_guests" className="select_block lead_text">
                            <h2>Number of guests</h2>
                            <div className="data">
                                <FormControl>
                                    <Select
                                        onClick={dropdown_handler}
                                        icon='height: "0px",width: "0px"'
                                        id="guests"
                                        name="guests"
                                        {...formik.getFieldProps("guests")}
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div id="res_date" className="select_block lead_text">
                            <h2>Date of reservation</h2>
                            <FormControl className="sub_title data" onChange={date_pressed}>
                                <Input
                                    type="date"
                                    id="date"
                                    name="date"
                                    {...formik.getFieldProps("date")}
                                />
                            </FormControl>
                        </div>
                        <div id="res_time" className="select_block lead_text">
                            <h2>Time of reservation</h2>
                            <div className="data">
                                <FormControl>
                                    <Select
                                        onClick={dropdown_handler}
                                        icon='height: "0px",width: "0px"'
                                        id="time"
                                        name="time"
                                        {...formik.getFieldProps("time")}
                                    >
                                        <option value="18:00">18:00</option>
                                        <option value="19:00">19:00</option>
                                        <option value="20:00">20:00</option>
                                        <option value="21:00">21:00</option>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div id="res_loc" className="select_block lead_text">
                            <h2>Table location</h2>
                            <div className="data">
                                <FormControl>
                                    <Select
                                        onClick={dropdown_handler}
                                        icon='height: "0px",width: "0px"'
                                        id="location"
                                        name="location"
                                        {...formik.getFieldProps("location")}
                                    >
                                        <option value="inside">Inside</option>
                                        <option value="outside">Outside</option>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                    <div className="details">
                        <h3 className="sub_title">Reserve details</h3>
                        <div className="names">
                            <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName} className="f_name">
                                <Input
                                    placeholder="First name"
                                    className="lead_text details_block "
                                    id="firstName"
                                    name="firstName"
                                    {...formik.getFieldProps("firstName")}
                                />
                                <FormErrorMessage className="lead_text input_error">{formik.errors.firstName}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.lastName && formik.errors.lastName} className="l_name">
                                <Input
                                    placeholder="Last name"
                                    className="lead_text details_block "
                                    id="lastName"
                                    name="lastName"
                                    {...formik.getFieldProps("lastName")}
                                />
                                <FormErrorMessage className="lead_text input_error">{formik.errors.lastName}</FormErrorMessage>
                            </FormControl>
                        </div>
                        <FormControl isInvalid={formik.touched.email && formik.errors.email} className="email">
                            <Input
                                placeholder="Email address"
                                className="lead_text details_block "
                                id="email"
                                name="email"
                                {...formik.getFieldProps("email")}
                            />
                            <FormErrorMessage className="lead_text input_error">{formik.errors.email}</FormErrorMessage>
                        </FormControl>
                        <FormControl>
                            <Textarea
                                placeholder="Leave a comment for your table reservation"
                                className="lead_text details_block comment"
                                id="comment"
                                name="comment"
                                {...formik.getFieldProps("comment")}
                            />
                        </FormControl>
                    </div>
                    <div className="buttons">
                        <button className="button lead_text b1" onClick={() => { navigate("/") }}>Back</button>
                        <button id="sum" type="submit" className="button lead_text b2" >Reserve</button>
                    </div>
                </form>
                <div className="image_stack_2">
                    <div className="top_image_2">
                        <img src={reserve_photo_1} alt="reserve_photo_1" className="reserve_photo_1" />
                    </div>
                    <div className="bottom_image_2">
                        <img src={reserve_photo_2} alt="reserve_photo_2" className="reserve_photo_2" />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Reserve_section