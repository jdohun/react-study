import {useState} from 'react';
import "./MyCss.css";
import {Hello} from "./children/Hello"

export function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        // alert('You clicked me!');
        setCount(count+1);
    }

    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton count={count} onClick={handleClick}/>
            <MyButton count={count} onClick={handleClick}/>
            <AboutPage/>
            <Profile/>
            <ShoppingList/>
            <Hello name="react" />
        </div>
    );
}

function MyButton({count, onClick}) {
    return (
        <button onClick={onClick}>
            {/*I'm a button*/}
            Clicked {count} times
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