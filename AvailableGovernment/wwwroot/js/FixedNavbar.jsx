//class Comment extends React.Component {
//    rawMarkup() {
//        const md = new Remarkable();
//        const rawMarkup = md.render(this.props.children.toString());
//        return { __html: rawMarkup };
//    }
//    render() {
//        return (
//            <div className="comment">
//                <h2 className="commentAuthor">{this.props.author}</h2>
//                <span dangerouslySetInnerHTML={this.rawMarkup()} />
//            </div>
//        );
//    }
//}

const FixedNavbar = (props) => {
    console.log(props);
    return (
        <div className="fixedNavbarContainer container">
            <div className="navbar">
                <div className="fixedNavbarLeft">
                    <div className="language">
                        <div className="languageIcon ml-1"><img src='./media/🎨 Icon Сolor.svg' /></div>
                        <div className="languageText ml-1">עברית</div>
                        <div className="languageArrow"><img className="languageArrowDown" src='./media/layer.svg' /></div>
                    </div>
                    <div className="loginSignup ml-4">
                        <div className="loginSignupIcon ml-2"><img src='./media/user.svg'/> </div>
                        <div className="loginSignupText">כניסה\הרשמה</div>
                    </div>
                </div>
                <div className="fixedNavbarRight logo">
                    LOGO
                </div>
            </div>
        </div>
    )
}