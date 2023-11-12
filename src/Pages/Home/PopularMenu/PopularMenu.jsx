import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import MenuItem from '../../../SharedPage/MenuItems/MenuItem'
import useMenu from '../../../Hooks/useMenu'
import Cover from '../../../SharedPage/Cover/Cover';
import img1 from "../../../assets/assets/home/chef-service.jpg"

export const PopularMenu = () => {

  const [menu] = useMenu();
  const popularItems = menu.filter(items => items.category === "popular")
  return (
    <div>
      <div className='space-y-10'>
        <Cover img={img1}
          title="Food terminal"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."></Cover>
        <SectionTitle heading="FROM OUR MENU" subHeading="---Check it out---"></SectionTitle>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-8'>
          {
            popularItems.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
          }
        </div>
        <div className='flex justify-center items-center flex-col my-5'>
          <button className='btn btn-sm btn-outline border-0 border-b-4'>View Full Menu</button>
        </div>
      </div>
    </div>
  )
}
