function MyButton() {
    return (
        <button>
            I'm a button
        </button>
    );
}

export function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton/>
            <AboutPage/>
        </div>
    );
}

// Fragment: 부모 엘리먼트 없이 자식 엘리먼트를 그룹화
function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>Hello there.<br/>How do you do?</p>
        </>
    );
}