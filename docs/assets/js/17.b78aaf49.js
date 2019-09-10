(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{275:function(n,e,t){"use strict";t.r(e);var r=t(38),s=Object(r.a)({},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("最新我们团队使用vue技术栈对官网进行了重构和优化，经过调研，在架构上前后端分离，由于有SEO的要求，所以需要做服务端渲染，本文将分享一下我们实战的过程。")]),n._v(" "),t("h2",{attrs:{id:"方案调研"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方案调研","aria-hidden":"true"}},[n._v("#")]),n._v(" 方案调研")]),n._v(" "),t("p",[n._v("在接到了重构和优化的需求后，我们首先需要去做技术调研，因为vue做服务端渲染已经很成熟了，并且我们团队就基本都用过vue，所以我们优先考虑使用vue技术栈进行重构。")]),n._v(" "),t("p",[n._v("实现业务功能和页面并不难，难点在于做服务端渲染，所以我们需要通过官网https://ssr.vuejs.org/zh/的Vue.js 服务器端渲染指南 和 网上各种实战分享了解各种必备知识。")]),n._v(" "),t("h3",{attrs:{id:"什么是服务器端渲染-ssr-？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是服务器端渲染-ssr-？","aria-hidden":"true"}},[n._v("#")]),n._v(" 什么是服务器端渲染 (SSR)？")]),n._v(" "),t("p",[n._v("早在SPA (Single Page Application 单页应用) 出现之前，所有的网页就是在服务端渲染的，服务器接收到客户端请求后，将数据和模板拼接成完整的html 文本到客户端。")]),n._v(" "),t("p",[n._v("随着 JS 的发展, 特别是支持SPA 的react和vue框架的出现, 呈现页面完全静态化, 动态内容交给前端(Js)渲染, 服务器只提供数据，前端还能控制页面的路由跳转。")]),n._v(" "),t("p",[n._v("对于vue的项目，服务端渲染指的是，服务器端将Vue的页面和对应的业务数据，在服务器直接完全渲染成html字符串后，再发送至浏览器, 最后在浏览器中混合为可交互的应用程序。")]),n._v(" "),t("h3",{attrs:{id:"服务器端渲染的利弊"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器端渲染的利弊","aria-hidden":"true"}},[n._v("#")]),n._v(" 服务器端渲染的利弊")]),n._v(" "),t("p",[n._v("与传统 SPA 相比，采用服务端渲染后，用户能够更快的看到页面内容, 同时也有利于爬虫抓取(SEO)。")]),n._v(" "),t("p",[n._v("同时服务端渲染，也需要 node 服务器, 需要耗费性能, 还需要做好缓存和优化, 相当于用空间换时间，全站 ssr 明显不可取, 现在流行较多的是首屏 ssr, 甚至首屏部分 ssr。")]),n._v(" "),t("h2",{attrs:{id:"原理分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原理分析","aria-hidden":"true"}},[n._v("#")]),n._v(" 原理分析")]),n._v(" "),t("p",[n._v("先看一张Vue官网的服务端渲染示意图：\n"),t("img",{attrs:{src:"/img/ssr.png",alt:"原理图.png"}})]),n._v(" "),t("p",[n._v("从图上可以看出，ssr 有两个入口文件，client.js 和 server.js， 都包含了应用代码，webpack 通过两个入口文件分别打包成给服务端用的 server bundle 和给客户端用的 client bundle。")]),n._v(" "),t("p",[n._v("当服务器接收到了来自客户端的请求之后，会创建一个渲染器 bundleRenderer，这个 bundleRenderer 会读取上面生成的 server bundle 文件，并且执行它的代码， 然后发送一个生成好的 html 到浏览器。")]),n._v(" "),t("p",[n._v("等到客户端加载了 client bundle 之后，会和服务端生成的DOM 进行 Hydration(判断这个DOM 和自己即将生成的DOM 是否相同，如果相同就将客户端的vue实例挂载到这个DOM上， 否则会提示警告)。")]),n._v(" "),t("h2",{attrs:{id:"如何实现及源码分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何实现及源码分析","aria-hidden":"true"}},[n._v("#")]),n._v(" 如何实现及源码分析")]),n._v(" "),t("p",[n._v("不管是参照vue官方的ssr教程从头配置，还是使用第三方的脚手架nuxt.js自动配置，都需要使用nodejs作为服务器渲染打包好的bundle，同时也需要在部署前通过入口文件生成对应的bundle。")]),n._v(" "),t("h3",{attrs:{id:"生成bundle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成bundle","aria-hidden":"true"}},[n._v("#")]),n._v(" 生成bundle")]),n._v(" "),t("ul",[t("li",[n._v("对于不同端的打包，需要使用对应的webpack插件配置，其中打包client bundle时为：")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');\n")])])]),t("p",[n._v("client-plugin的内容为：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var onEmit = function (compiler, name, hook) {\n  if (compiler.hooks) {\n    compiler.hooks.emit.tapAsync(name, hook);\n  } else {\n    compiler.plugin('emit', hook);     // Webpack < 4.0.0\n  }\n};\nvar VueSSRClientPlugin = function VueSSRClientPlugin (options) {\n  if ( options === void 0 ) options = {};\n  this.options = Object.assign({\n    filename: 'vue-ssr-client-manifest.json'\n  }, options);\n};\n\nVueSSRClientPlugin.prototype.apply = function apply (compiler) {\n  var this$1 = this;\n  onEmit(compiler, 'vue-client-plugin', function (compilation, cb) {\n    var stats = compilation.getStats().toJson();\n\n    var allFiles = uniq(stats.assets\n      .map(function (a) { return a.name; }));\n\n    var initialFiles = uniq(Object.keys(stats.entrypoints)\n      .map(function (name) { return stats.entrypoints[name].assets; })\n      .reduce(function (assets, all) { return all.concat(assets); }, [])\n      .filter(function (file) { return isJS(file) || isCSS(file); }));\n\n    var asyncFiles = allFiles\n      .filter(function (file) { return isJS(file) || isCSS(file); })\n      .filter(function (file) { return initialFiles.indexOf(file) < 0; });\n\n    var manifest = {\n      publicPath: stats.publicPath,\n      all: allFiles,\n      initial: initialFiles,\n      async: asyncFiles,\n      modules: { /* [identifier: string]: Array<index: number> */ }\n    };\n\n    var assetModules = stats.modules.filter(function (m) { return m.assets.length; });\n    var fileToIndex = function (file) { return manifest.all.indexOf(file); };\n    stats.modules.forEach(function (m) {\n      // ignore modules duplicated in multiple chunks\n      if (m.chunks.length === 1) {\n        var cid = m.chunks[0];\n        var chunk = stats.chunks.find(function (c) { return c.id === cid; });\n        if (!chunk || !chunk.files) {\n          return\n        }\n        var id = m.identifier.replace(/\\s\\w+$/, ''); // remove appended hash\n        var files = manifest.modules[hash(id)] = chunk.files.map(fileToIndex);\n        // find all asset modules associated with the same chunk\n        assetModules.forEach(function (m) {\n          if (m.chunks.some(function (id) { return id === cid; })) {\n            files.push.apply(files, m.assets.map(fileToIndex));\n          }\n        });\n      }\n    });\n\n    var json = JSON.stringify(manifest, null, 2);\n    compilation.assets[this$1.options.filename] = {\n      source: function () { return json; },\n      size: function () { return json.length; }\n    };\n    cb();\n  });\n};\nmodule.exports = VueSSRClientPlugin;\n")])])]),t("p",[n._v("而打包server bundle时为：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')\n")])])]),t("p",[n._v("server-plugin的内容为：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var onEmit = function (compiler, name, hook) {\n  if (compiler.hooks) {\n    compiler.hooks.emit.tapAsync(name, hook);\n  } else {\n    compiler.plugin('emit', hook); // Webpack < 4.0.0\n  }\n};\n\nvar VueSSRServerPlugin = function VueSSRServerPlugin (options) {\n  if ( options === void 0 ) options = {};\n\n  this.options = Object.assign({\n    filename: 'vue-ssr-server-bundle.json'\n  }, options);\n};\n\nVueSSRServerPlugin.prototype.apply = function apply (compiler) {\n  var this$1 = this;\n  validate(compiler); // client插件没有\n\n  onEmit(compiler, 'vue-server-plugin', function (compilation, cb) {\n    var stats = compilation.getStats().toJson();\n    var entryName = Object.keys(stats.entrypoints)[0];\n    var entryInfo = stats.entrypoints[entryName];\n\n    if (!entryInfo) {\n      // #5553\n      return cb()\n    }\n\n    var entryAssets = entryInfo.assets.filter(isJS);\n\n    if (entryAssets.length > 1) {\n      throw new Error(\n        \"Server-side bundle should have one single entry file. \" +\n        \"Avoid using CommonsChunkPlugin in the server config.\"\n      )\n    }\n\n    var entry = entryAssets[0];\n    if (!entry || typeof entry !== 'string') {\n      throw new Error(\n        (\"Entry \\\"\" + entryName + \"\\\" not found. Did you specify the correct entry option?\")\n      )\n    }\n\n    var bundle = {\n      entry: entry,\n      files: {},\n      maps: {}\n    };\n\n    stats.assets.forEach(function (asset) {\n      if (isJS(asset.name)) {\n        bundle.files[asset.name] = compilation.assets[asset.name].source();\n      } else if (asset.name.match(/\\.js\\.map$/)) {\n        bundle.maps[asset.name.replace(/\\.map$/, '')] = JSON.parse(compilation.assets[asset.name].source());\n      }\n      // do not emit anything else for server\n      delete compilation.assets[asset.name];\n    });\n\n    var json = JSON.stringify(bundle, null, 2);\n    var filename = this$1.options.filename;\n\n    compilation.assets[filename] = {\n      source: function () { return json; },\n      size: function () { return json.length; }\n    };\n\n    cb();\n  });\n};\n\nmodule.exports = VueSSRServerPlugin;\n")])])]),t("p",[n._v("可以看到 sever-plugin主要多了：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var validate = function (compiler) {\n  if (compiler.options.target !== 'node') {\n    warn('webpack config `target` should be \"node\".');\n  }\n\n  if (compiler.options.output && compiler.options.output.libraryTarget !== 'commonjs2') {\n    warn('webpack config `output.libraryTarget` should be \"commonjs2\".');\n  }\n\n  if (!compiler.options.externals) {\n    tip(\n      'It is recommended to externalize dependencies in the server build for ' +\n      'better build performance.'\n    );\n  }\n};\n")])])]),t("h3",{attrs:{id:"createbundlerenderer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#createbundlerenderer","aria-hidden":"true"}},[n._v("#")]),n._v(" createBundleRenderer")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("const { createBundleRenderer } = require('vue-server-renderer');\n\nconst createRenderer = (bundle, opts = {}) => createBundleRenderer(\n  bundle,\n  Object.assign(opts, {\n    basedir: resolve('./dist'),\n    template: fs.readFileSync(templatePath, 'utf-8'),\n    runInNewContext: false,\n  }),\n);\n\n(ctx.body = await renderer.renderToString(context));\n")])])]),t("h3",{attrs:{id:"rendertostring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rendertostring","aria-hidden":"true"}},[n._v("#")]),n._v(" renderToString")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("    renderToString: function renderToString (\n      component,\n      context,\n      cb\n    ) {\n      var assign;\n\n      if (typeof context === 'function') {\n        cb = context;\n        context = {};\n      }\n      if (context) {\n        templateRenderer.bindRenderFns(context);\n      }\n\n      // no callback, return Promise\n      var promise;\n      if (!cb) {\n        ((assign = createPromiseCallback(), promise = assign.promise, cb = assign.cb));\n      }\n\n      var result = '';\n      var write = createWriteFunction(function (text) {\n        result += text;\n        return false\n      }, cb);\n      try {\n        render(component, write, context, function (err) {\n          if (err) {\n            return cb(err)\n          }\n          if (context && context.rendered) {\n            context.rendered(context);\n          }\n          if (template) {\n            try {\n              var res = templateRenderer.render(result, context);\n              if (typeof res !== 'string') {\n                // function template returning promise\n                res\n                  .then(function (html) { return cb(null, html); })\n                  .catch(cb);\n              } else {\n                cb(null, res);\n              }\n            } catch (e) {\n              cb(e);\n            }\n          } else {\n            cb(null, result);\n          }\n        });\n      } catch (e) {\n        cb(e);\n      }\n\n      return promise\n    },\n")])])]),t("p",[n._v("可以看到，vue实现服务端渲染主要是依靠vue-server-renderer，打包时用插件生成bundle，然后部署时提供createBundleRenderer处理页面请求，使用renderToString做服务端渲染。")])])},[],!1,null,null,null);e.default=s.exports}}]);