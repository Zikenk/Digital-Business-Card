export default function Main() {
    return (
        <main>
            <div class="intro ">
                <h1>Ziken Kabdeshova</h1>
                <h2>Frontend Developer</h2>
                <div className="button-container">
                    <a href="mailto:ziken.kabdeshova@google.com" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <button className="email">
                            <i className="fa fa-envelope" style={{ marginRight: '8px' }}> </i>
                        Email
                    </button>
                    </a>
                    <a href="https://www.linkedin.com/in/ziken-kabdeshova-4586b5180/" 
                    target="_blank" rel="noopener noreferrer">
                    <button className="linkedIn"> 
                        <i className="fa-brands fa-linkedin" style={{ marginRight: '8px' }}></i>
                    LinkedIn
                    </button> 
                    </a>
                </div>
            </div>
            <div className="about">
                <h3 className="section-title">About</h3>
                <p className="section-text">
                   👋 Hi, I'm Ziken Kabdeshova — a beginner frontend developer excited to dive into the world of web development. 
                   I'm passionate about learning how to build clean, user-friendly interfaces and love exploring ways to simplify everyday tasks through code. 
                   I'm currently focused on mastering the fundamentals of HTML, CSS, and JavaScript, while staying curious about best practices and modern tools. 
                </p>
                <h3 className="section-title">Interests</h3>
                <p className="section-text">I'm originally from Kazakhstan and currently living in the Netherlands. 
                I love food — cooking and trying new dishes. 
                I enjoy playing video games and have strong communication and soft skills. 
                I'm learning frontend development and excited to grow in this field.
                </p>
            </div>
        </main>
    );

}