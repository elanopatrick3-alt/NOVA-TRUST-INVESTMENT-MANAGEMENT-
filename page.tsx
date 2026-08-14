import "../auth.css";

export default function RegisterPage() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <a className="brand" href="/">NovaTrust<span>Investments</span></a>
        <h1>Create your account</h1>
        <p>Start with your basic details. Verification comes later.</p>
        <form>
          <label>Full name<input type="text" name="name" required /></label>
          <label>Email address<input type="email" name="email" required /></label>
          <label>Phone number<input type="tel" name="phone" required /></label>
          <label>Password<input type="password" name="password" minLength={8} required /></label>
          <button className="button" type="submit">Create account</button>
        </form>
        <p>Already registered? <a href="/login">Sign in</a></p>
      </div>
    </main>
  );
}
