import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';
import {PLANET_LINK} from "@/constants";

const Footer: React.FC = () => {
  const defaultMessage = 'yjc出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'github',
          title: <><GithubOutlined/> yjc GitHub</>,
          href: 'https://github.com/ittheshy',
          blankTarget: true,
        },
        {
          key: 'mark',
          title: '蜀ICP备2023008554号-1',
          href: 'https://beian.miit.gov.cn',
          blankTarget: true,
        }
      ]}
    />
  );
};

export default Footer;
