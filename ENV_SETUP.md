# 环境变量设置说明

## 概述
为了保护敏感信息（如API密钥、访问令牌等），项目使用环境变量来存储这些机密信息。

## 设置步骤

### 1. 复制环境变量模板
```bash
cp .env.example .env
```

### 2. 编辑 .env 文件
将 `.env` 文件中的占位符替换为实际的敏感信息：

```env
# AWS Configuration
AWS_ACCESS_KEY_ID=your_actual_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_actual_aws_secret_access_key
AWS_REGION=ap-southeast-1

# Google OAuth Configuration
GOOGLE_OAUTH_ACCESS_TOKEN=your_actual_google_oauth_access_token
GOOGLE_REFRESH_TOKEN=your_actual_google_refresh_token
GOOGLE_API_KEY=your_actual_google_api_key
```

## 重要提醒

1. **永远不要提交 .env 文件到Git仓库**
   - `.env` 文件已经被添加到 `.gitignore` 中
   - 只提交 `.env.example` 文件作为模板

2. **定期轮换密钥**
   - 定期更新AWS访问密钥
   - 定期更新Google OAuth令牌

3. **生产环境**
   - 在生产环境中使用更安全的方式存储敏感信息
   - 考虑使用AWS Secrets Manager或类似服务

## 已修复的安全问题

- ✅ 从代码中移除了硬编码的AWS访问密钥
- ✅ 从代码中移除了硬编码的Google OAuth令牌
- ✅ 删除了包含敏感信息的JSON文件
- ✅ 创建了环境变量模板文件

## 下一步

1. 更新所有使用敏感信息的代码以使用环境变量
2. 在CI/CD流程中正确配置环境变量
3. 考虑使用更安全的密钥管理解决方案 
