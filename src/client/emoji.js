const ENTRIES = [
  ['🚀', 'rocket 火箭 发射 上线 部署 release'],
  ['🧭', 'compass 指南针 导航 方向 navigate'],
  ['📦', 'package 包 依赖 打包 build box 箱子'],
  ['🧩', 'puzzle 拼图 插件 plugin 组件 component'],
  ['🛠️', 'tools 工具 tool 维修 构建'],
  ['⚙️', 'gear 齿轮 设置 settings 配置 config'],
  ['🧪', 'test 测试 实验 lab 试管'],
  ['🧠', 'brain 大脑 智能 ai 模型 model'],
  ['🤖', 'robot 机器人 bot 智能体 agent'],
  ['🛰️', 'satellite 卫星 网络 通信 network'],
  ['🪐', 'planet 星球 太空 space 宇宙'],
  ['🌍', 'earth 地球 全球 globe world 国际'],
  ['🔥', 'fire 火 热门 hot 燃'],
  ['⚡', 'bolt 闪电 性能 performance 快 fast'],
  ['💡', 'idea 想法 灵感 提示 tip 灯泡'],
  ['📚', 'books 书 文档 docs 学习 study'],
  ['📝', 'memo 笔记 note 写 记录 草稿 draft'],
  ['🗂️', 'folder 文件夹 归档 archive 分类'],
  ['📁', 'folder 文件夹 目录 directory'],
  ['📊', 'chart 图表 报表 report 统计'],
  ['📈', 'growth 增长 上升 趋势 trend graph'],
  ['💰', 'money 钱 财务 finance 资金'],
  ['🏦', 'bank 银行 金融 账户 account'],
  ['🛒', 'cart 购物车 电商 shop 商城'],
  ['🎨', 'art 设计 design 画板 palette 调色'],
  ['🎬', 'movie 电影 视频 video 剪辑'],
  ['🎧', 'audio 音频 耳机 音乐 music headphone'],
  ['🌱', 'seedling 幼苗 起步 新生 start 植物 plant'],
  ['🍀', 'luck 幸运 四叶草 clover'],
  ['🐳', 'whale 鲸鱼 docker 容器 container'],
  ['🐙', 'octopus 章鱼 github 八爪鱼'],
  ['🦀', 'crab 螃蟹 rust 语言 language'],
  ['🔒', 'lock 锁 安全 security 加密'],
  ['🔍', 'search 搜索 查找 magnifier 放大镜'],
  ['🧱', 'brick 砖 基础 基建 infra'],
  ['🏠', 'home 家 首页 house'],
  ['📱', 'phone 手机 移动端 mobile app'],
  ['💻', 'laptop 电脑 开发 dev 代码 code 前端'],
  ['🖥️', 'desktop 台式机 服务器 server 显示器 后端'],
  ['⌨️', 'keyboard 键盘 输入 input'],
  ['🖱️', 'mouse 鼠标 点击 click'],
  ['🔌', 'plug 插件 接入 接口 api 电源'],
  ['🧵', 'thread 线程 线 process 进程'],
  ['🪝', 'hook 钩子 回调 callback'],
  ['🧬', 'dna 基因 继承 inherit'],
  ['🩺', 'health 健康 诊断 diagnose 体检'],
  ['📡', 'antenna 天线 广播 信号 signal'],
  ['🌐', 'web 网页 互联网 internet 全球'],
  ['☁️', 'cloud 云 云计算 备份 backup'],
  ['🗄️', 'database 数据库 db 存储 storage 机柜'],
  ['💾', 'disk 磁盘 保存 save 软盘'],
  ['📀', 'disc 光盘 刻录 镜像 image'],
  ['🧮', 'abacus 计算 compute 算法 algorithm'],
  ['📐', 'ruler 尺子 设计 design 规范 spec'],
  ['📏', 'ruler 测量 长度 标准 standard'],
  ['🔬', 'microscope 显微镜 研究 research 分析'],
  ['🔭', 'telescope 望远镜 观察 observe 监控 monitor'],
  ['⚗️', 'alembic 蒸馏 实验 experiment 化学'],
  ['🧲', 'magnet 磁铁 吸引 拉取 pull'],
  ['🪫', 'battery 电池 电量 power 低'],
  ['🔋', 'battery 电池 电量 充电 charge'],
  ['💳', 'card 卡片 支付 payment 卡'],
  ['🧾', 'receipt 收据 账单 bill 发票'],
  ['🗃️', 'cardbox 文件盒 资料 归档'],
  ['📋', 'clipboard 剪贴板 任务 task 清单 list 日志'],
  ['✅', 'done 完成 成功 check 通过 pass'],
  ['❌', 'error 错误 报错 fail 失败 cross'],
  ['⚠️', 'warning 警告 注意 caution'],
  ['🚧', 'construction 施工 进行中 wip 建设中'],
  ['🔧', 'wrench 扳手 修复 fix 维护'],
  ['🔨', 'hammer 锤子 构建 build 打造'],
  ['🪛', 'screwdriver 螺丝刀 调试 debug'],
  ['🧰', 'toolbox 工具箱 工具包 kit'],
  ['🗺️', 'map 地图 路线 roadmap 规划'],
  ['📍', 'pin 标记 位置 location'],
  ['🚩', 'flag 旗帜 里程碑 milestone 特性 feature'],
  ['🏁', 'finish 终点 完成 收尾'],
  ['⏱️', 'timer 计时 秒表 耗时 duration'],
  ['⏰', 'alarm 闹钟 提醒 reminder 定时 schedule'],
  ['📅', 'calendar 日历 日期 date 计划'],
  ['🗓️', 'calendar 日历 排期 计划日程'],
  ['🪄', 'magic 魔法 自动 auto 一键'],
  ['✨', 'sparkles 闪耀 新功能 new 优化'],
  ['🎯', 'target 目标 goal 靶心 聚焦'],
  ['🏆', 'trophy 奖杯 成就 achievement 冠军'],
  ['🥇', 'medal 金牌 第一 top 最优'],
  ['🌟', 'star 星 收藏 favorite 精选'],
  ['❤️', 'heart 心 喜欢 love 收藏'],
  ['👍', 'thumbsup 赞 好的 ok 同意'],
  ['👀', 'eyes 看 观察 watch 审查 review'],
  ['🧑‍💻', 'developer 开发者 程序员 coder 写代码'],
  ['🧑‍🔧', 'engineer 工程师 维修 maintain'],
  ['🧑‍🎨', 'designer 设计师 美术 art'],
  ['🧑‍🚀', 'astronaut 宇航员 探索 explore'],
  ['🕹️', 'joystick 手柄 游戏 game 控制 control'],
  ['🎮', 'game 游戏 娱乐 play'],
  ['🎲', 'dice 骰子 随机 random'],
  ['🧸', 'bear 玩偶 toy 玩具'],
  ['🐢', 'turtle 乌龟 慢 slow 缓存 cache'],
  ['🐇', 'rabbit 兔子 快 fast 敏捷 agile'],
  ['🦊', 'fox 狐狸 聪明 smart'],
  ['🐝', 'bee 蜜蜂 构建 builder 勤劳'],
  ['🦉', 'owl 猫头鹰 智慧 wisdom'],
  ['🐼', 'panda 熊猫 国宝'],
  ['🦄', 'unicorn 独角兽 稀有 unique'],
  ['🏔️', 'mountain 山 高峰 peak 挑战 challenge'],
  ['🌊', 'wave 波浪 流 stream 海 ocean'],
  ['🌪️', 'tornado 龙卷风 重构 refactor 混乱'],
  ['🌈', 'rainbow 彩虹 多彩 colorful 主题 theme'],
  ['☕', 'coffee 咖啡 休息 break'],
  ['🍵', 'tea 茶 休息 break'],
  ['🍕', 'pizza 披萨 零食 snack'],
  ['🎂', 'cake 蛋糕 生日 birthday 庆祝'],
  ['🎉', 'party 庆祝 发布 release 完成 done'],
  ['🧨', 'firecracker 鞭炮 爆发 boom'],
  ['🔔', 'bell 铃 通知 notification 提醒'],
  ['📢', 'megaphone 喇叭 公告 announce'],
  ['📣', 'announce 宣布 广播 broadcast'],
  ['🔗', 'link 链接 关联 合并 引用 reference'],
  ['🧷', 'clip 别针 夹子 固定'],
  ['📌', 'pin 图钉 置顶 pinned'],
  ['🧿', 'amulet 护符 保护 protect 防护'],
  ['🛡️', 'shield 盾牌 防护 security 安全'],
  ['🔐', 'security 安全 加密 密码 key 密钥'],
  ['🗝️', 'key 钥匙 密钥 access 访问'],
  ['🪪', 'id 身份 证件 用户 card'],
  ['🧑‍⚖️', 'judge 审核 裁决 合规 compliance'],
  ['📎', 'clip 附件 attach 文件 file'],
  ['✂️', 'scissors 剪刀 裁剪 crop 切分 split'],
  ['🧹', 'broom 扫帚 打扫 clean'],
  ['🗑️', 'trash 垃圾 删除 delete 回收站'],
  ['📤', 'upload 上传 导出 export 发送 send'],
  ['📥', 'download 下载 导入 import'],
  ['📮', 'mail 邮件 投递 post'],
  ['📨', 'mail 邮件 收件 inbox'],
  ['💬', 'chat 聊天 对话 comment 评论 消息 message'],
  ['🗨️', 'speech 发言 评论 talk'],
  ['🕐', 'clock 时钟 时间 time'],
  ['⏳', 'hourglass 沙漏 等待 waiting 处理中'],
  ['🌀', 'cyclone 循环 旋转 loop 刷新 refresh'],
  ['🔄', 'refresh 刷新 同步 sync 重试 retry'],
  ['♻️', 'recycle 回收 复用 reuse 重构 refactor'],
  ['📖', 'book 书 阅读 read 文档 docs'],
  ['📕', 'book 书 手册 manual'],
  ['🗞️', 'news 新闻 资讯'],
  ['🔖', 'bookmark 书签 收藏 标记'],
  ['🏷️', 'tag 标签 label 版本 version'],
  ['🪟', 'window 窗口 browser 浏览器 桌面'],
  ['🧯', 'extinguisher 灭火器 紧急 emergency'],
  ['🚑', 'ambulance 救护 故障 incident 事故'],
  ['🚨', 'siren 警报 告警 alert 严重 critical'],
  ['📉', 'down 下降 减少 decrease 回退 rollback'],
  ['🧊', 'ice 冰 冷冻 freeze 冻结'],
  ['🍬', 'candy 糖 甜 sweet 小惊喜'],
  ['🐶', '狗 小狗 dog 宠物', 'nature'],
  ['🐱', '猫 小猫 cat 宠物', 'nature'],
  ['🐭', '鼠 老鼠 mouse 宠物', 'nature'],
  ['🐹', '仓鼠 hamster 宠物', 'nature'],
  ['🐰', '兔 兔子 rabbit 宠物', 'nature'],
  ['🐻', '熊 bear', 'nature'],
  ['🐨', '考拉 koala', 'nature'],
  ['🐯', '虎 老虎 tiger', 'nature'],
  ['🦁', '狮 狮子 lion', 'nature'],
  ['🐮', '牛 cow 奶牛', 'nature'],
  ['🐷', '猪 pig', 'nature'],
  ['🐸', '蛙 青蛙 frog', 'nature'],
  ['🐵', '猴 猴子 monkey', 'nature'],
  ['🐔', '鸡 chicken', 'nature'],
  ['🐧', '企鹅 penguin', 'nature'],
  ['🐦', '鸟 bird', 'nature'],
  ['🦆', '鸭 duck', 'nature'],
  ['🦅', '鹰 eagle', 'nature'],
  ['🦇', '蝙蝠 bat', 'nature'],
  ['🐺', '狼 wolf', 'nature'],
  ['🐴', '马 horse', 'nature'],
  ['🦋', '蝴蝶 butterfly', 'nature'],
  ['🐌', '蜗牛 snail 慢', 'nature'],
  ['🐞', '瓢虫 bug 虫子', 'nature'],
  ['🐜', '蚂蚁 ant', 'nature'],
  ['🕷️', '蜘蛛 spider', 'nature'],
  ['🦂', '蝎子 scorpion', 'nature'],
  ['🐟', '鱼 fish', 'nature'],
  ['🐬', '海豚 dolphin', 'nature'],
  ['🦈', '鲨鱼 shark', 'nature'],
  ['🌵', '仙人掌 cactus 植物', 'nature'],
  ['🌲', '树 松树 tree 森林', 'nature'],
  ['🌳', '树 tree 绿化', 'nature'],
  ['🌴', '棕榈树 palm 海滩', 'nature'],
  ['🌻', '向日葵 sunflower 花', 'nature'],
  ['🌹', '玫瑰 rose 花', 'nature'],
  ['🌸', '樱花 blossom 花', 'nature'],
  ['🍁', '枫叶 maple 秋天', 'nature'],
  ['❄️', '雪花 snowflake 冬天 冷', 'nature'],
  ['⛄', '雪人 snowman 冬天', 'nature'],
  ['🌞', '太阳 sun 晴天', 'nature'],
  ['🍎', '苹果 apple 水果', 'food'],
  ['🍐', '梨 pear 水果', 'food'],
  ['🍊', '橘子 orange 水果', 'food'],
  ['🍋', '柠檬 lemon 水果', 'food'],
  ['🍌', '香蕉 banana 水果', 'food'],
  ['🍉', '西瓜 watermelon 水果', 'food'],
  ['🍇', '葡萄 grapes 水果', 'food'],
  ['🍓', '草莓 strawberry 水果', 'food'],
  ['🍒', '樱桃 cherry 水果', 'food'],
  ['🍑', '桃子 peach 水果', 'food'],
  ['🥭', '芒果 mango 水果', 'food'],
  ['🥝', '猕猴桃 kiwi 水果', 'food'],
  ['🍅', '番茄 tomato 蔬菜', 'food'],
  ['🥦', '西兰花 broccoli 蔬菜', 'food'],
  ['🍄', '蘑菇 mushroom', 'food'],
  ['🍞', '面包 bread', 'food'],
  ['🥐', '牛角包 croissant', 'food'],
  ['🧀', '奶酪 cheese', 'food'],
  ['🥚', '蛋 egg', 'food'],
  ['🥓', '培根 bacon', 'food'],
  ['🍔', '汉堡 hamburger', 'food'],
  ['🍟', '薯条 fries', 'food'],
  ['🌭', '热狗 hotdog', 'food'],
  ['🌮', '塔可 taco', 'food'],
  ['🍜', '面条 ramen noodle', 'food'],
  ['🍚', '米饭 rice', 'food'],
  ['🍣', '寿司 sushi', 'food'],
  ['🥟', '饺子 dumpling', 'food'],
  ['🍪', '饼干 cookie', 'food'],
  ['🧁', '纸杯蛋糕 cupcake', 'food'],
  ['🍫', '巧克力 chocolate', 'food'],
  ['🍯', '蜂蜜 honey', 'food'],
  ['🥛', '牛奶 milk', 'food'],
  ['🍺', '啤酒 beer', 'food'],
  ['🍷', '红酒 wine', 'food'],
  ['🍹', '鸡尾酒 cocktail', 'food'],
  ['⚽', '足球 soccer 运动', 'activity'],
  ['🏀', '篮球 basketball 运动', 'activity'],
  ['🏈', '橄榄球 football 运动', 'activity'],
  ['⚾', '棒球 baseball 运动', 'activity'],
  ['🎾', '网球 tennis 运动', 'activity'],
  ['🏐', '排球 volleyball 运动', 'activity'],
  ['🏓', '乒乓 pingpong 运动', 'activity'],
  ['🏸', '羽毛球 badminton 运动', 'activity'],
  ['🥊', '拳击 box 运动', 'activity'],
  ['🏊', '游泳 swim 运动', 'activity'],
  ['🚴', '骑行 bike 运动', 'activity'],
  ['🧘', '冥想 yoga 放松', 'activity'],
  ['🛹', '滑板 skate 运动', 'activity'],
  ['⛷️', '滑雪 ski 冬天', 'activity'],
  ['🎸', '吉他 guitar 音乐', 'activity'],
  ['🎹', '钢琴 piano 音乐', 'activity'],
  ['🎺', '小号 trumpet 音乐', 'activity'],
  ['🥁', '鼓 drum 音乐', 'activity'],
  ['🎤', '麦克风 mic 唱歌 演讲', 'activity'],
  ['🎪', '马戏 circus 活动', 'activity'],
  ['🚗', '汽车 car 车', 'other'],
  ['🚕', '出租车 taxi 打车', 'other'],
  ['🚌', '公交 bus 大巴', 'other'],
  ['🚄', '高铁 train 火车 快', 'other'],
  ['✈️', '飞机 plane 航班 出行', 'other'],
  ['🚢', '船 ship 货运', 'other'],
  ['⚓', '锚 anchor 稳定', 'other'],
  ['🏢', '写字楼 office 公司', 'other'],
  ['🏭', '工厂 factory 生产', 'other'],
  ['🏗️', '工地 construction 施工', 'other'],
  ['🖨️', '打印机 printer 输出', 'dev'],
  ['🖲️', '跟踪球 trackball 输入', 'dev'],
  ['🔎', '放大镜 search 查找', 'dev'],
  ['📶', '信号 signal 网络', 'dev'],
  ['📲', '下载 download 安装 install', 'dev'],
  ['🎛️', '旋钮 control 调节', 'dev'],
  ['😀', '笑 开心 grin 高兴 smile'],
  ['😄', '笑 大笑 开心 smile happy'],
  ['😂', '笑 笑哭 笑死 laugh joy'],
  ['🤣', '笑 爆笑 rofl laughing'],
  ['😊', '微笑 开心 温和 blush smile'],
  ['🙂', '微笑 slight smile 平静'],
  ['😉', '眨眼 wink 调皮'],
  ['😎', '酷 cool 太阳镜 自信'],
  ['🤔', '思考 think 想一想 琢磨'],
  ['😅', '尴尬 紧张 sweat 汗'],
  ['😭', '哭 大哭 cry 悲伤'],
  ['😢', '哭 流泪 sad 难过'],
  ['😡', '生气 愤怒 angry mad'],
  ['😴', '睡 困 sleep 休息'],
  ['🤯', '震惊 爆炸 mindblown 惊讶'],
  ['🥳', '庆祝 派对 party 生日'],
  ['😇', '天使 善良 angel halo'],
  ['🫡', '敬礼 salute 收到 明白'],
  ['🤝', '握手 合作 handshake 达成'],
  ['🙏', '拜托 感谢 thanks please'],
  ['☀️', '太阳 晴天 白天 sun 光照'],
  ['🌙', '月亮 夜晚 night 夜间'],
  ['⭐', '星 收藏 star 评分 推荐'],
  ['🎵', '音乐 音符 music 声音'],
  ['🏃', '跑步 运动 run 快速'],
  ['🍭', '糖 甜 lollipop 趣味'],
  ['🧑‍🍳', '厨师 烹饪 cook 厨房'],
  ['🧑‍🏫', '老师 教学 teacher 讲解'],
]

const POPULARITY = [
  '😂', '🤣', '😊', '😭', '😀', '😄', '🤔', '😎', '👍', '🙏',
  '😅', '😢', '😡', '😴', '🤯', '🥳', '😇', '🫡', '🤝', '🎉',
  '🔥', '✅', '❌', '⚠️', '🚀', '⚙️', '💡', '🔍', '🔒', '📌',
  '📈', '📉', '💰', '🎨', '📚', '📝', '📦', '🧩', '🧠', '🤖',
  '🌍', '☀️', '🌙', '⭐', '🎵', '🐳', '💻', '📱', '☕', '🎯',
]

const CATEGORY_RULES = [
  ['smileys', ['笑', '开心', '哭', '生气', '思考', '睡', '震惊', '庆祝', '天使', '敬礼', '握手', '拜托', '尴尬', '眨眼', '酷', '微笑', 'smile', 'laugh', 'cry', 'angry', 'think', 'sleep', 'cool', 'wink', 'party', 'salute', 'thanks', 'handshake', 'grin', 'joy', 'rofl', 'blush']],
  ['nature', ['太阳', '月亮', '星', '地球', '波浪', '山', '彩虹', '植物', '宇宙', '太空', '鲸鱼', '章鱼', '螃蟹', '兔子', '狐狸', '蜜蜂', '猫头鹰', '熊猫', '独角兽', '乌龟', '龙卷风', '云', '幼苗', '幸运', 'sun', 'moon', 'star', 'earth', 'wave', 'mountain', 'rainbow', 'plant', 'space', 'whale', 'octopus', 'crab', 'rabbit', 'fox', 'bee', 'owl', 'panda', 'unicorn', 'turtle', 'tornado', 'cloud', 'seedling']],
  ['dev', ['开发', '部署', '服务器', '数据库', '测试', '构建', '插件', '接口', '线程', '钩子', '容器', '语言', '算法', '文档', '终端', '代码', '键盘', '进程', '仓库', 'dev', 'code', 'server', 'database', 'db', 'test', 'build', 'plugin', 'api', 'thread', 'hook', 'container', 'rust', 'docker', 'github', 'algorithm', 'docs', 'keyboard', 'process', 'release', 'refactor', 'debug']],
]

const CATEGORY_ORDER = ['popular', 'smileys', 'nature', 'food', 'activity', 'dev', 'other']
const POPULAR_LIMIT = 24

const POPULAR_RANK = new Map(POPULARITY.map((char, index) => [char, index]))

export const EMOJI_CATALOG = ENTRIES.map(([char, keywords, category], index) => {
  const words = keywords.toLowerCase().split(/\s+/).filter(Boolean)
  return {
    char,
    keywords: words,
    category: category ?? categoryOf(words),
    rank: POPULAR_RANK.get(char) ?? 1000 + index,
  }
})

function categoryOf(words) {
  for (const [category, markers] of CATEGORY_RULES) {
    if (markers.some(marker => words.includes(marker))) return category
  }
  return 'other'
}

export function groupEmoji(characters) {
  const byChar = new Map(EMOJI_CATALOG.map(entry => [entry.char, entry]))
  const buckets = new Map()
  for (const char of characters) {
    const entry = byChar.get(char)
    if (entry === undefined) continue
    const key = entry.category
    if (!buckets.has(key)) buckets.set(key, [])
    buckets.get(key).push(entry)
  }
  const popular = [...characters]
    .map(char => byChar.get(char))
    .filter(entry => entry !== undefined && POPULAR_RANK.has(entry.char))
    .sort((left, right) => left.rank - right.rank)
    .slice(0, POPULAR_LIMIT)
  const groups = []
  if (popular.length > 0) groups.push({ key: 'popular', characters: popular.map(entry => entry.char) })
  for (const key of CATEGORY_ORDER) {
    if (key === 'popular') continue
    const entries = buckets.get(key)
    if (entries === undefined || entries.length === 0) continue
    groups.push({
      key,
      characters: entries.sort((left, right) => left.rank - right.rank).map(entry => entry.char),
    })
  }
  return groups
}

export function searchEmoji(query) {
  const keyword = String(query ?? '').trim().toLowerCase()
  if (keyword === '') return EMOJI_CATALOG.map(entry => entry.char)
  const words = keyword.split(/\s+/).filter(Boolean)
  const scored = []
  for (const entry of EMOJI_CATALOG) {
    let total = 0
    let matched = true
    for (const word of words) {
      const score = scoreEntry(entry, word)
      if (score === 0) {
        matched = false
        break
      }
      total += score
    }
    if (matched) scored.push({ char: entry.char, score: total })
  }
  const rank = new Map(EMOJI_CATALOG.map(entry => [entry.char, entry.rank]))
  scored.sort((left, right) => right.score - left.score || (rank.get(left.char) ?? 0) - (rank.get(right.char) ?? 0))
  return scored.map(item => item.char)
}

function scoreEntry(entry, word) {
  if (entry.char === word) return 100
  if (entry.keywords.includes(word)) return 30
  if (entry.keywords.some(keyword => keyword.startsWith(word))) return 20
  if (entry.keywords.some(keyword => keyword.includes(word))) return 10
  if (entry.char.includes(word)) return 5
  return 0
}
