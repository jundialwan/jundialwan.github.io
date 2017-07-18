import React from 'react';

const ProjectItem = (props) =>
{
  return (
    <div className="col-sm-12">
      <div className="panel panel-default">
        <div className="panel-heading ubuntu-font">
          <a rel="noopener noreferrer" target={`_${props.title}`} href={props.link}>
            {props.title}
          </a>&nbsp;
          <i className="fa fa-external-link-square" />
        </div>
        <div className="panel-body" dangerouslySetInnerHTML={{ __html: props.description }} />
        <div className="panel-footer">
          {props.tags.map(tag => <span key={tag}><span className="label label-default">{tag}</span>&nbsp;</span>)}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
