//<a class="navbar-brand" href="#">Navbar</a>
//<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//    <span class="navbar-toggler-icon"></span>
//</button>
//<li class="nav-item active">
//    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//</li>
//<li class="nav-item">
//    <a class="nav-link" href="#">Link</a>
//</li>
//<li class="nav-item">
//    <a class="nav-link disabled" href="#">Disabled</a>
//</li>
//<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

const MeetingSearchBar = (props) => {

    return (
        <div className="meetingSearchBarContainer">
            <nav className="navbar navbar-expand-lg navbar-light">


                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <form className="form-inline my-2 my-lg-0">
                        <input type="submit" className="form-control mr-sm-2" type="search" placeholder="חפש" aria-label="Search" />
                    </form>

                    <input type="text" name="datetimes" />

                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                בחר איזור
                        </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>

                    <input className="form-control mr-sm-2" type="search" placeholder="שם אירוע" aria-label="Search" />

                </div>
            </nav>
        </div>
    )
}