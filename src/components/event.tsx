import  Map  from './map'
export default function Event() {
    return ( 
      <div className='text-xl flex flex-col gap-10 md:gap-20 md:flex-row md:items-center'>
        <div className='flex flex-col gap-2 md:gap-4'>

        
        <p>
          <span className='font-semibold'>日期</span>: 2024年3月2日 周六</p>
          <p><span className='font-semibold'>时间</span>: 上午11:00前</p>
          <p><span className='font-semibold'>地点</span>: Ulriksdal Station 东侧</p>
          <p><span className='font-semibold'>详情</span>: <a href='https://www.xiaohongshu.com/discovery/item/65df612c000000000b017222?app_platform=ios&app_version=8.24.5&author_share=1&share_from_user_hidden=true&type=normal&xhsshare=WeixinSession&appuid=6053b36f000000000101e54f&apptime=1709139827' className='underline' target='_blank'>👉小红书帖文</a></p>
          </div>
        <Map />
        

      </div>
    ) 
  }