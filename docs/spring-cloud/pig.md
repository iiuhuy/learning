# Pig 框架

基于 PIG 商业版框架学习。

## 认证鉴权

#### @inner 注解

> https://www.yuque.com/pig4cloud/pig/hz5ppn

在接口上使用 `@Inner` 注解，使得 url 无需鉴权:

```java
/**
 * 通过设备标识查询存储容器信息
 * @param device 容器标识
 * @return R
 */
@ApiOperation(value = "通过标识查询存储信息", notes = "通过标识查询存储信息")
@GetMapping("/info")
@Inner(value = false)
public R<ContainerInfoVO> getInfo(@RequestHeader("device") String device) {
	return R.ok(storageContainerService.getInfo(device));
}
```
