(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{305:function(t,a,e){"use strict";e.r(a);var s=e(14),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"central-authentication-service-cas-adfs集成配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#central-authentication-service-cas-adfs集成配置"}},[t._v("#")]),t._v(" Central Authentication Service (CAS) - ADFS集成配置")]),t._v(" "),a("p",[t._v("CAS和ADFS集成的配置。参考文档：")]),t._v(" "),a("ul",[a("li",[t._v("文档地址："),a("a",{attrs:{href:"https://apereo.github.io/cas/7.1.x/integration/ADFS-Integration.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://apereo.github.io/cas/7.1.x/integration/ADFS-Integration.html"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"需要注意的点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需要注意的点"}},[t._v("#")]),t._v(" 需要注意的点")]),t._v(" "),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("src/main/resources")]),t._v(" 中新建一个配置文件"),a("code",[t._v("application-standalone.properties")]),t._v("。需要注意下面几项的配置：")]),t._v(" "),a("ul",[a("li",[t._v("identity-provider-url：从ADFS配置中获取")]),t._v(" "),a("li",[t._v("identity-provider-identifier：来自于ADFS。"),a("s",[t._v("注意必须是"),a("strong",[t._v("http")]),t._v("。")]),a("code",[t._v("（这里应该是和下面的xml文件里的entityID相对应）")])]),t._v(" "),a("li",[t._v("relying-party-identifier：ADFS中添加信赖方依赖。注意协议是webFed，且证书应该是上面配置文档里面提到的生成密钥和证书")]),t._v(" "),a("li",[t._v("cas.authn.wsfed[0].cookie.crypto.encryption.key：这个必须是256？512？源码里给的例子的长度不够，下面的长度是够的。")]),t._v(" "),a("li",[t._v("signing-certificate-resources：可以直接引用adfs的web地址：https://adfs.iresp.com/federationmetadata/2007-06/federationmetadata.xml，但前提是一定要确认在docker里可以curl到这个地址，如果证书不对，可能就会失败。可以像下面的例子里一样，将此文件写到war包里")])]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ADFS -------")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("cas.monitor.endpoints.endpoint.defaults.access")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("ANONYMOUS")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("management.endpoints.web.exposure.include")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("*")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("management.endpoints.enabled-by-default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("cas.server.name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("https://sso.iresp.com:8443")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("cas.server.prefix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("${cas.server.name}/cas")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("cas.audit.engine.enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("logging.level.org.apereo.cas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("trace")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#cas.service-registry.core.init-from-json=true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#cas.service-registry.json.location=file:${PWD}/ci/tests/puppeteer/scenarios/${SCENARIO}/services")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("cas.tgc.crypto.encryption.key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("u696jJnPvm1DHLR7yVCSKMMzzoPoFxJZW4-MP1CkM5w")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("cas.tgc.crypto.signing.key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("zPdNCd0R1oMR0ClzEqZzapkte8rO0tNvygYjmHoUhitAu6CBscwMC3ZTKy8tleTKiQ6GVcuiQQgxfd1nSKxf7w")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("cas.webflow.crypto.signing.key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("v43dwqO_GbGSVsFqgPFpVdwdMSEunMUzc4QSF13x18kInHPeRuvntleljO5Y5cKqDGAFe1vv10mM4tpyoKyBBA")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("cas.webflow.crypto.encryption.key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("2PikjfOKY6n8Bbux2cy-Hg")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("cas.authn.attribute-repository.stub.attributes.uid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("casuser")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("cas.authn.attribute-repository.stub.attributes.lastname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("User")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("cas.authn.attribute-repository.stub.attributes.firstname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("CAS")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("cas.authn.wsfed[0].cookie.crypto.encryption.key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("wjDVCGIx5ztrk9vKI55YIP01SLE4Ziaj0WsfjvVIaAEwjDVCGIx5ztrk9vKI55YIP01SLE4Ziaj0WsfjvVIaAE")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("cas.authn.wsfed[0].cookie.crypto.signing.key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("BXI9U68k1OYJ-vgCvqtZHLPhkCCiAWWfGiqHWdBVF7hXsvgLD1WQHgHbUYee039w7KXux7zfRpBDBeq6K3jfUg")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("cas.authn.wsfed[0].identity-provider-url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("https://adfs.iresp.com/adfs/ls/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("cas.authn.wsfed[0].identity-provider-identifier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("http://adfs.iresp.com/adfs/services/trust")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("cas.authn.wsfed[0].relying-party-identifier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("urn:iresp:cas2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("cas.authn.wsfed[0].name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("adfs.iresp.com")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("cas.authn.wsfed[0].id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("ADFS")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("cas.authn.wsfed[0].tolerance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("PT60S")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("cas.authn.wsfed[0].identity-attribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("upn")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("cas.authn.wsfed[0].signing-certificate-resources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("classpath:federationmetadata.xml")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("cas.authn.wsfed[0].attributes-type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("BOTH")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("cas.authn.wsfed[0].attribute-resolver-enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("cas.authn.wsfed[0].auto-redirect-type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("SERVER")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#cas.authn.wsfed[0].attribute-mutator-script.location=file:${PWD}/ci/tests/puppeteer/scenarios/${SCENARIO}/WsFedAttrs.groovy")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("cas.authn.wsfed[0].attribute-mutator-script.location")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("file:/etc/cas/config/WsFedAttrs.groovy")]),t._v("\n")])])]),a("h4",{attrs:{id:"密钥和证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#密钥和证书"}},[t._v("#")]),t._v(" 密钥和证书")]),t._v(" "),a("p",[t._v("官方的集成文档里提到了怎么做密钥和证书：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("openssl genrsa "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-out")]),t._v(" private.key "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v("\nopenssl rsa "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-pubout")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-in")]),t._v(" private.key "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-out")]),t._v(" public.key "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-inform")]),t._v(" PEM "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-outform")]),t._v(" DER\nopenssl pkcs8 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-topk8")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-inform")]),t._v(" PEM "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-outform")]),t._v(" DER "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-nocrypt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-in")]),t._v(" private.key "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-out")]),t._v(" private.p8\nopenssl req "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-x509")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-key")]),t._v(" private.key "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-out")]),t._v(" x509.pem "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-days")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("365")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# convert the X509 certificate to DER format")]),t._v("\nopenssl x509 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-outform")]),t._v(" der "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-in")]),t._v(" x509.pem "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-out")]),t._v(" certificate.crt\n")])])]),a("p",[t._v("遵循这里的方法生成的private.key和certificate.crt是很重要的。这两个文件和ADFS的federationmetadata.xml文件要一起打在war包里。同时，在ADFS中添加信赖方依赖时，要使用这里的证书：certificate.crt。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/image-20241024111236836.png",alt:"image-20241024111236836"}})]),t._v(" "),a("h4",{attrs:{id:"关于证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于证书"}},[t._v("#")]),t._v(" 关于证书")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("ADFS的域名证书")])]),t._v(" "),a("li",[a("p",[t._v("CAS SSO的域名证书")])]),t._v(" "),a("li",[a("p",[t._v("web应用的域名证书")]),t._v(" "),a("p",[t._v("这三者的证书最好是相互都认的。尤其，如果CAS跑在docker里，一定要确认是docker容器里面安装证书。")])])]),t._v(" "),a("h3",{attrs:{id:"adfs中添加信赖方依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adfs中添加信赖方依赖"}},[t._v("#")]),t._v(" ADFS中添加信赖方依赖")]),t._v(" "),a("p",[t._v("添加依赖时要注意的几个点：")]),t._v(" "),a("ul",[a("li",[t._v("终结点是web-federation被动类型，值参考："),a("code",[t._v("https://sso.iresp.com:8443/cas/login?service=https%3A%2F%2Fdaf0-123-119-239-72.ngrok-free.app%2F")]),t._v("。注意最后必须是%2F，原因不明。")]),t._v(" "),a("li",[t._v("加密证书必须是上面生成的证书。")]),t._v(" "),a("li",[t._v("信赖方信任标识符类似于这样：urn:iresp:cas2")]),t._v(" "),a("li",[t._v("别忘了最后一步的添加声明规则")])]),t._v(" "),a("h3",{attrs:{id:"tomcat和nginx配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tomcat和nginx配置"}},[t._v("#")]),t._v(" Tomcat和nginx配置")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("如果是配置CAS在tomcat中运行并经过nginx代理，建议tomcat配置为https，同时nginx也是https，且nginx要配置透传：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    client_max_body_size 500M"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    proxy_redirect          off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    proxy_set_header Host "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    proxy_set_header Upgrade "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_upgrade")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    proxy_set_header Connection "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"upgrade"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    proxy_set_header Referer "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_referer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    proxy_set_header Cookie "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_cookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    proxy_set_header X-Real-IP "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n    proxy_set_header X-Forwarded-For "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_add_x_forwarded_for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    proxy_set_header X-FORWARDED-HOST "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$server_addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n    proxy_set_header X-FORWARDED-PORT "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$server_port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    proxy_read_timeout "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    proxy_connect_timeout "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    proxy_pass   https://localhost:8443/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("p",[t._v("配置参考文档：")]),t._v(" "),a("p",[t._v("https://jingyan.baidu.com/article/925f8cb8d1b503c0dde0569b.html")])])}),[],!1,null,null,null);a.default=r.exports}}]);