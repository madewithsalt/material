import React from 'react';
import { Icon } from '../components/Icons';
import { CollapsibleGroup } from '../components/Collapsible';
import CodeElement from '../docs/CodeElement';
import faker from 'faker';

const Collapsibles = (props) => (
  <div className="primary-container flex-wrapper">
    <h1>Collapsible Groups</h1>

    <h3>Default Collapsible</h3>
    <CollapsibleGroup active={1}>
      <div title="One">{ faker.lorem.paragraphs(2) }</div>
      <div title="Two">{ faker.lorem.paragraphs(2) }</div>
      <div title="Three">{ faker.lorem.paragraphs(2) }</div>
    </CollapsibleGroup>

    <h4>Code Example</h4>
    <p>
      This example uses the default configuration, and specifies
      that the second child will default to 'active'.
    </p>
    <CodeElement react>
      {
        `
import { CollapsibleGroup } from 'material';

<CollapsibleGroup active={1}>
  <div title="One">...</div>
  <div title="Two">...</div>
  <div title="Three">...</div>
</CollapsibleGroup>
        `
      }
    </CodeElement>

    <h3>Popout Collapsible</h3>
    <p>
      Pretty much the same as above, but with the option
      <code> popout</code> added.
    </p>
      <CollapsibleGroup active={1} popout>
        <div title="One">{ faker.lorem.paragraphs(2) }</div>
        <div title="Two">{ faker.lorem.paragraphs(2) }</div>
        <div title="Three">{ faker.lorem.paragraphs(2) }</div>
      </CollapsibleGroup>

      <CodeElement react>
        {
          `
  <CollapsibleGroup active={1} popout>
    <div title="One">...</div>
    <div title="Two">...</div>
    <div title="Three">...</div>
  </CollapsibleGroup>
          `
        }
      </CodeElement>

      <h3>Flexible Titles</h3>
      <p>
        The <code> title </code> prop must be added for the
      collapsible child to render, but this doesn't have to be just a string:
      </p>
      <CollapsibleGroup popout>
        <div title={(
              <div>
                <Icon>star</Icon>
                {"One!"}
              </div>
            )}>{ faker.lorem.paragraphs(2) }</div>
      </CollapsibleGroup>

      <CodeElement react>
        {
          `
<CollapsibleGroup popout>
  <div title={(
        <div>
          <Icon>star</Icon>
          {"One!"}
        </div>
      )}>{ '...' }</div>
</CollapsibleGroup>
          `
        }
      </CodeElement>
  </div>
)

export default Collapsibles;
