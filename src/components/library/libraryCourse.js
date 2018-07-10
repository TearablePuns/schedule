import React, { Component } from 'react';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                {/* icon component */}
                {/* arrow component */}
                {/* action button component */}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>There are a bunch of random words in this sentence and I am just typing so I can fulfill a random number of words and I will keep on typing and typing and typing because there needs to be a lot of words here.</p>
                </div>
            </div>
        );
    }
}

export default LibraryCourse;