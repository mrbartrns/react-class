import Breadcrumb from '@components/Breadcrumb';
import BreadcrumbItem from '@components/Breadcrumb/BreadcrumbItem';

export default {
  title: 'Component/Breadcrumb',
  component: Breadcrumb,
};

export const Defualt = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="#">HOME</BreadcrumbItem>
      <BreadcrumbItem href="#">HOME</BreadcrumbItem>
      <BreadcrumbItem href="#">HOME</BreadcrumbItem>
    </Breadcrumb>
  );
};
