"use server"

export async function createUser(formData: FormData) {
  "use server";
  const values = Object.fromEntries(formData);
  const res = await fetch(`${process.env.PUBLIC_URL}/api/auth/signUp`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);
}