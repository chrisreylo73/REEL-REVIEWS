import { Form } from "@remix-run/react"
import styles from "./UserForm.css";

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}

const UserForm = ({ isSubmitting }: { isSubmitting: boolean }) => {
  return (
    <div className="userForm">
      <h2>Enter user information below: </h2>
      <Form method="post">
        <div>
          <input name="email" placeholder="Email" size={30} />
        </div>
        <div>
          <input name="name" placeholder="User Name" size={30} />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create New User"}
        </button>
      </Form>
    </div>
  )
}

export default UserForm
