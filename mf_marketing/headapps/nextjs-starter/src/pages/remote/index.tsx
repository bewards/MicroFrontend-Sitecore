import { PropsWithChildren } from 'react';

function RemoteLayout(props: PropsWithChildren<{ content: string }>) {
  const { content, children } = props;
  return (
    <div>
      <div>Remote Layout {content}</div>
      {children ? children : <div>Children from Sitecore (mf_marketing)</div>}
    </div>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      content: 'mf_marketing serverside props',
    },
  };
};

// RemoteLayout.getInitialProps = async () => {
//   return {
//     content: 'from mf_marketing',
//   };
// };

export default RemoteLayout;
