import { Component } from "react";
import { Link } from "react-router-dom";
import './home-common.css'


export default class HomeView extends Component {
    render() {

        return (
            <section className="pageContainer">
                <div className="homeContainer">
                    <div>
                        <img className="homeImg" src="https://golfweek.usatoday.com/wp-content/uploads/sites/87/2019/10/usatsi_12533119.jpg"></img>
                    </div>
                    <div className="articleContainer borderTheme">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id eu nisl nunc mi ipsum faucibus vitae. A arcu cursus vitae congue mauris rhoncus. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Tristique risus nec feugiat in. Diam vel quam elementum pulvinar etiam non quam. Donec enim diam vulputate ut pharetra sit amet aliquam. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Id cursus metus aliquam eleifend mi in. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id consectetur purus ut faucibus pulvinar. Eu sem integer vitae justo eget magna. Faucibus turpis in eu mi. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Tortor aliquam nulla facilisi cras fermentum odio.
                        </p>
                        <p>
                            Porttitor rhoncus dolor purus non enim praesent elementum. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Tristique senectus et netus et malesuada. Elementum sagittis vitae et leo duis ut. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Volutpat est velit egestas dui id. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Amet nulla facilisi morbi tempus iaculis urna id. Vitae tortor condimentum lacinia quis vel eros. Hendrerit dolor magna eget est. Aliquet bibendum enim facilisis gravida neque convallis a. Quis vel eros donec ac odio.
                        </p>
                        <p>
                            Est ante in nibh mauris cursus mattis molestie. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Morbi quis commodo odio aenean sed adipiscing. Ipsum nunc aliquet bibendum enim. Pellentesque nec nam aliquam sem et tortor consequat id. Quis auctor elit sed vulputate mi. Consequat nisl vel pretium lectus quam id leo in vitae. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Praesent elementum facilisis leo vel fringilla. Eu lobortis elementum nibh tellus. Risus nullam eget felis eget nunc. Velit scelerisque in dictum non consectetur a erat nam at. Magna sit amet purus gravida quis. Dignissim sodales ut eu sem integer.
                        </p>
                        <p>
                            Porttitor rhoncus dolor purus non enim praesent elementum. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Tristique senectus et netus et malesuada. Elementum sagittis vitae et leo duis ut. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Volutpat est velit egestas dui id. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Amet nulla facilisi morbi tempus iaculis urna id. Vitae tortor condimentum lacinia quis vel eros. Hendrerit dolor magna eget est. Aliquet bibendum enim facilisis gravida neque convallis a. Quis vel eros donec ac odio.
                        </p>
                        <p>
                            Est ante in nibh mauris cursus mattis molestie. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Morbi quis commodo odio aenean sed adipiscing. Ipsum nunc aliquet bibendum enim. Pellentesque nec nam aliquam sem et tortor consequat id. Quis auctor elit sed vulputate mi. Consequat nisl vel pretium lectus quam id leo in vitae. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Praesent elementum facilisis leo vel fringilla. Eu lobortis elementum nibh tellus. Risus nullam eget felis eget nunc. Velit scelerisque in dictum non consectetur a erat nam at. Magna sit amet purus gravida quis. Dignissim sodales ut eu sem integer.
                        </p>
                    </div>
                    <div className="homeLinkContainer">
                        <Link to='/rankings' className="homeLink">
                            <b>World Golf Rankings</b>
                            <img className="homeLinkImg" src='https://static.thenounproject.com/png/3922525-200.png' />
                        </Link>
                        <Link to='/leaderboard' className="homeLink">
                            <b>PGA Tour Leaderboard</b>
                            <img className="homeLinkImg" src='https://static.thenounproject.com/png/72549-200.png' />
                        </Link>
                    </div>
                </div>
            </section>
        )
    }
}