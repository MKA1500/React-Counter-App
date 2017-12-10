import React, {Component} from 'react';

class ProjectItem extends Component {
    deleteProject() {
        console.log(this.props.project.id + ' removed');
    }

    render() {
        return (
            <li className="Project">
                <div className="listItem">
                    <button className="btn btn-danger remove" onClick={this.deleteProject.bind(this)}>Remove</button>
                    <strong>{this.props.project.title}: </strong>
                    {this.props.project.category} <br /> id: {this.props.project.id}
                </div>
            </li>
        );
    }
}

export default ProjectItem;