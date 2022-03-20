import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/home";
import About from "../../pages/about"
import Contact from "../../pages/contact";
import AdultPerformer from "../../pages/clients/adult-performer";
import SocialMedia from "../../pages/clients/social-media";
import BandsAndMusic from "../../pages/clients/bands-and-music";
import YouTubeTwicth from "../../pages/clients/youTube-twicth";
import DigitalArtistAndPhotographer from "../../pages/clients/digital-artist-and-photographer";
import SmallToLargeBusiness from "../../pages/clients/small-to-large-business";
const Routes = () => {
    return (
        <Fragment>
            <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/book' component={Contact} />
            <Route exact path='/adult-performer-and-content-creators' component={AdultPerformer} />
            <Route exact path='/social-media-influencers' component={SocialMedia} />
            <Route exact path='/bands-music-artists' component={BandsAndMusic} />
            <Route exact path='/youtube-and-twitch-content-creators' component={YouTubeTwicth} />
            <Route exact path='/digital-artists-and-photographers' component={DigitalArtistAndPhotographer} />
            <Route exact path='/small-to-large-businesses' component={SmallToLargeBusiness} />
        </Switch>
        </Fragment>
    );
};

export default Routes;