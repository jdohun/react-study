import "./MyCss.css";

export function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton/>
            <AboutPage/>
            <Profile/>
            <ShoppingList/>
        </div>
    );
}

function MyButton() {
    // 외부 내부 작성 위치 무관
    function handleClick() {
        alert('You clicked me!');
    }
    
    return (
        <button onClick={handleClick}>
            I'm a button
        </button>
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

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    );
}

const products = [
    {title: 'Cabbage', isFruit: false, id: 1},
    {title: 'Garlic', isFruit: false, id: 2},
    {title: 'Apple', isFruit: true, id: 3},
];

const listItems = products.map(product =>
    <li
        key={product.id}
        style={{
            color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
    >
        {product.title}
    </li>
);

function ShoppingList() {
    return (
        <ul>{listItems}</ul>
    );
}