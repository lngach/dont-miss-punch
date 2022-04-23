import * as dotenv from 'dotenv'
dotenv.config({ override: true, path: process.env.CUSTOM_ENV_PATH })

import * as puppeteer from 'puppeteer-core'

(async () => {
  const MAX_TRY = Number(process.env.MAX_RETRY) || 3

  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
    executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome",
    args:['--start-maximized']
  });

  let retry: number = MAX_TRY
  let checked: boolean = false
  let page: puppeteer.Page = null

  PUNCH: do {
    try {
      page = await browser.newPage()

      await page.goto('https://blueprint.cyberlogitec.com.vn/')
      await page.waitForTimeout(2000)
    
      await page.type('#username', process.env.USER_NAME, { delay: 100 })
      await page.type('#password', process.env.PASSWORD, { delay: 100 })
    
      await page.click("#submit-btn")
      await page.waitForTimeout(3000)
    
    
      await page.hover('.webix_scroll_cont .webix_tree_leaves .webix_tree_branch_1:nth-child(2)')
      await page.waitForTimeout(2000)
    
      await page.click('body > div.webix_view.webix_window.webix_popup.webix_sidebar_popup.webix_sidebar_popup_left.systemSidebarMenu > div > div.webix_win_body > div > div.webix_view.webix_menu.webix_sidebar_popup_list.webix_sidebar_popup_left.systemSidebarMenu > div > a:nth-child(1)')
      await page.waitForTimeout(2000)
  
      await page.click('#checkInOutBody > div > div > div.webix_view.webix_layout_line > div:nth-child(2) > div:nth-child(1) > div > button')
      
      await page.close()

      checked = true
    } catch({ message }) {
      console.log(message)
      await page.close()
      
      checked = false
      continue PUNCH
    }
  } while (!checked && retry-- > 0)

  if (checked) console.log(`${new Date().toLocaleString()}: Finished with sucess!`)
  else console.log(`${new Date().toLocaleString()}: Finished with failure!`)

  await browser.close()
})()