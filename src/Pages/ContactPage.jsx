import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"


export default function ContactPage() {

  const { setCurrentPage } = useOutletContext();

  useEffect(() => {
    setCurrentPage("Contact");
  }, [setCurrentPage]);

  return (
    <div className="page_container">
      <h1>Contact Page</h1>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" />
        </label>
        <button type="submit">Submit</button>

      </form>
    </div>
  )
}
