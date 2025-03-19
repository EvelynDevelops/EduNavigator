import { Button, TextInput, Select } from "flowbite-react";
import {
  TextureCard,
  TextureCardContent,
  TextureCardHeader,
  TextureCardTitle,
  TextureSeparator,
} from "@/components/ui/texture-card";

export default function ApplySubmissionForm() {
  return (
    <TextureCard className="max-w-lg mx-auto p-6">
      <TextureCardHeader className="text-center">
        <TextureCardTitle className="text-2xl font-bold">申请收录</TextureCardTitle>
      </TextureCardHeader>

      <TextureCardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium">* URL 链接地址：</label>
          <div className="flex gap-2 mt-1">
            <input placeholder="完整链接或域名" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">* 选择分组：</label>
          <Select>
            <option value="option1">搜索引擎</option>
            <option value="option2">教育</option>
            <option value="option2">社交</option>
            <option value="option2">工具</option>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium">* 网站名称：</label>
          <input placeholder="填写网站名称"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>

        <div>
          <label className="text-sm font-medium">网站图标：</label>
          <input placeholder="填写图标的 URL 地址" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          <p className="text-xs text-gray-500 mt-1">
            填写图标的 URL 地址，如：
            <span className="text-red-500"> http://www.xxx.com/logo.png</span>
          </p>
        </div>

        <div>
          <label className="text-sm font-medium">* 验证码：</label>
          <div className="grid-rows-2">
            <input placeholder="输入验证码" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <img src="/captcha.png" alt="验证码" className="h-10" />
          </div>
        </div>
      </TextureCardContent>

      <TextureSeparator />

      <div className="p-4 grid-rows-2 justify-center ">
        <Button className="bg-gray-900 hover:bg-black text-white font-bold py-1 px-4 rounded-lg transition w-full">提 交</Button>
        <Button className="text-gray-900 font-bold py-1 px-4 transition duration-300 w-full">退回首页</Button>
      </div>
    </TextureCard>
  );
}
