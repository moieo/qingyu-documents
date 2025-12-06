# Modbus TCP 规范详解 🌐

!!! info "TCP 协议概述"
    Modbus TCP 是 Modbus 协议在 TCP/IP 网络上的实现，它使用标准的 TCP 连接，支持多主站通信，具有传输距离远、网络拓扑灵活的特点。

## 📋 协议基础

### 传输特性

**网络层**:

- **传输协议**: TCP
- **默认端口**: 502
- **连接方式**: 客户端-服务器模式
- **数据编码**: 二进制

**协议特点**:

- **可靠性**: 依赖 TCP 协议的可靠性传输
- **多路复用**: 支持多个并发连接
- **跨网络**: 支持局域网和互联网通信
- **扩展性**: 易于集成到现有网络基础设施

### 帧结构

**TCP 帧格式**:

```
[MBAP头] [功能码] [数据]
  7字节   1字节   N字节
```

**MBAP头结构**:

```
[事务标识] [协议标识] [长度] [单元标识]
   2字节      2字节    2字节    1字节
```

**帧组成部分**:

- **MBAP头**: Modbus Application Protocol Header
- **功能码**: 1字节，定义操作类型
- **数据域**: N字节，具体操作数据

## ⚙️ 通信参数

### 网络配置

**标准配置**:

| 参数 | 标准值 | 可选值 | 说明 |
|------|--------|--------|------|
| 端口号 | 502 | 1-65535 | TCP服务端口 |
| 超时时间 | 5秒 | 1-60秒 | 连接和响应超时 |
| 最大连接数 | 5 | 1-255 | 并发连接限制 |
| 缓冲区大小 | 256字节 | 64-4096字节 | 数据缓冲区 |

### 连接管理

**连接类型**:

- **短连接**: 每次请求建立新连接
- **长连接**: 保持连接复用
- **连接池**: 管理多个连接

**推荐配置**:

=== "工业应用"
    ```
    端口: 502
    超时: 5秒
    最大连接: 10
    连接类型: 长连接
    ```

=== "互联网应用"
    ```
    端口: 自定义(非502)
    超时: 10秒
    最大连接: 50
    连接类型: 连接池
    ```

## 🔄 通信流程

### 连接建立

**客户端流程**:

1. 创建TCP套接字
2. 连接到服务器IP:502
3. 发送Modbus请求
4. 接收响应数据
5. 关闭连接(短连接)或保持连接(长连接)

**服务器流程**:

1. 监听502端口
2. 接受客户端连接
3. 解析Modbus请求
4. 处理请求并生成响应
5. 发送响应数据

### 数据交换

**请求-响应模式**:
```
客户端: [MBAP头] [功能码] [数据]
服务器: [MBAP头] [功能码] [数据]
```

**事务标识**:

- 用于匹配请求和响应
- 客户端生成，服务器原样返回
- 通常使用递增计数器

## 📊 MBAP头详解

### 字段说明

**事务标识 (Transaction Identifier)**:

- **长度**: 2字节
- **用途**: 标识事务，匹配请求和响应
- **范围**: 0-65535
- **生成**: 客户端生成，通常递增

**协议标识 (Protocol Identifier)**:

- **长度**: 2字节
- **值**: 0x0000 (Modbus协议)
- **用途**: 标识协议类型

**长度 (Length)**:

- **长度**: 2字节
- **计算**: 单元标识 + 功能码 + 数据的字节数
- **范围**: 1-256

**单元标识 (Unit Identifier)**:

- **长度**: 1字节
- **用途**: 标识从站设备(兼容串行Modbus)
- **范围**: 0-255 (0通常用于不指定设备)

### 示例分析

**请求示例**:

```
00 01 00 00 00 06 01 03 00 00 00 02
```

**解析**:

- `00 01`: 事务标识(1)
- `00 00`: 协议标识(Modbus)
- `00 06`: 长度(6字节)
- `01`: 单元标识(设备1)
- `03`: 功能码(读保持寄存器)
- `00 00`: 起始地址(0)
- `00 02`: 寄存器数量(2)

**响应示例**:

```
00 01 00 00 00 07 01 03 04 00 0A 00 0B
```

**解析**:

- `00 01`: 事务标识(与请求相同)
- `00 00`: 协议标识(Modbus)
- `00 07`: 长度(7字节)
- `01`: 单元标识(设备1)
- `03`: 功能码(读保持寄存器)
- `04`: 字节计数(4字节)
- `00 0A`: 寄存器1值(10)
- `00 0B`: 寄存器2值(11)

## 🔧 功能码支持

### 标准功能码

Modbus TCP 支持所有标准 Modbus 功能码：

| 功能码 | 名称 | 说明 |
|--------|------|------|
| 0x01 | 读线圈 | 读取线圈状态 |
| 0x02 | 读离散输入 | 读取离散输入状态 |
| 0x03 | 读保持寄存器 | 读取保持寄存器 |
| 0x04 | 读输入寄存器 | 读取输入寄存器 |
| 0x05 | 写单个线圈 | 写入单个线圈 |
| 0x06 | 写单个寄存器 | 写入单个寄存器 |
| 0x0F | 写多个线圈 | 写入多个线圈 |
| 0x10 | 写多个寄存器 | 写入多个寄存器 |

### 扩展功能码

某些设备可能支持扩展功能码：

- 0x17: 读写多个寄存器
- 0x2B: 封装接口传输
- 设备特定的私有功能码

## 🛡️ 安全考虑

### 网络安全

**风险因素**:

- **明文传输**: 数据未加密
- **无身份认证**: 不验证客户端身份
- **端口暴露**: 502端口对网络可见
- **DoS攻击**: 可能遭受拒绝服务攻击

**防护措施**:

=== "网络层安全"
    - 使用防火墙限制访问
    - 配置VPN隧道
    - 实施网络分段

=== "应用层安全"
    - 使用TLS加密(Modbus over TLS)
    - 实现身份认证机制
    - 部署入侵检测系统

=== "系统安全"
    - 定期更新固件
    - 监控网络流量
    - 记录安全事件

### 最佳实践

**工业网络**:

- 使用专用工业网络
- 与办公网络物理隔离
- 实施严格的访问控制

**远程访问**:

- 使用VPN连接
- 限制访问IP范围
- 启用连接日志

## 📈 性能优化

### 连接优化

**连接复用**:

- 使用长连接减少连接建立开销
- 实现连接池管理
- 合理设置连接超时

**批量操作**:

- 使用多个寄存器读取功能码
- 合并小请求为批量请求扩展功能码
- 优化数据包大小

### 网络优化

**TCP参数调优**:

```
# Linux 系统调优示例
net.ipv4.tcp_keepalive_time = 300
net.ipv4.tcp_keepalive_intvl = 60
net.ipv4.tcp_keepalive_probes = 5
net.core.rmem_max = 16777216
net.core.wmem_max = 16777216
```

**QoS配置**:

- 为Modbus流量设置优先级
- 配置带宽限制
- 实施流量整形

## 🔍 故障诊断

### 常见问题

=== "连接失败"
    **可能原因**:

    - 网络连接问题
    - 防火墙阻止
    - 服务器未运行
    - 端口被占用
    
    **排查步骤**:

    1. 检查网络连通性(ping)
    2. 验证防火墙配置
    3. 确认服务状态
    4. 检查端口占用

=== "超时错误"
    **可能原因**:

    - 网络延迟过高
    - 服务器负载过大
    - 数据包丢失
    - 配置超时时间过短
    
    **排查步骤**:

    1. 检查网络延迟
    2. 监控服务器负载
    3. 分析网络丢包
    4. 调整超时设置

=== "数据错误"
    **可能原因**:

    - 寄存器地址错误
    - 功能码不支持
    - 数据格式不匹配
    - 设备配置错误
    
    **排查步骤**:
    
    1. 核对寄存器映射
    2. 验证功能码支持
    3. 检查数据格式
    4. 确认设备配置

### 调试工具

**网络工具**:

- **Wireshark**: 网络包分析
- **tcpdump**: 命令行抓包
- **netcat**: TCP连接测试

**专业工具**:

- **ModbusPoll**: Modbus测试工具
- **MBSlave**: Modbus从站模拟
- **自定义测试脚本**: 自动化测试

## 💻 实现示例

### Python 实现

=== "客户端实现"
    ```python
    from pymodbus.client import ModbusTcpClient
    from pymodbus.exceptions import ModbusException
    
    def read_registers(host, port=502, unit=1):
        client = ModbusTcpClient(
            host=host,
            port=port,
            timeout=5
        )
        
        try:
            if client.connect():
                # 读取保持寄存器
                result = client.read_holding_registers(
                    address=0,
                    count=10,
                    slave=unit
                )
                
                if not result.isError():
                    return result.registers
                else:
                    print(f"读取错误: {result}")
        except ModbusException as e:
            print(f"Modbus异常: {e}")
        finally:
            client.close()
        
        return None
    ```

=== "服务器实现"

    ```python
    from pymodbus.server import StartTcpServer
    from pymodbus.datastore import ModbusSequentialDataBlock
    from pymodbus.datastore import ModbusSlaveContext, ModbusServerContext
    
    def run_server():
        # 创建数据存储
        store = ModbusSlaveContext(
            di=ModbusSequentialDataBlock(0, [0]*100),     # 离散输入
            co=ModbusSequentialDataBlock(0, [0]*100),     # 线圈
            hr=ModbusSequentialDataBlock(0, [0]*100),     # 保持寄存器
            ir=ModbusSequentialDataBlock(0, [0]*100)      # 输入寄存器
        )
        
        context = ModbusServerContext(slaves=store, single=True)
        
        # 启动TCP服务器
        StartTcpServer(
            context=context,
            address=("0.0.0.0", 502)
        )
    ```

### C# 实现

=== "客户端实现"

    ```csharp
    using Modbus.Device;
    using System.Net.Sockets;
    
    public class ModbusTcpClientExample
    {
        public ushort[] ReadRegisters(string ip, int port, byte unitId)
        {
            using (TcpClient client = new TcpClient(ip, port))
            {
                var modbusClient = ModbusIpMaster.CreateIp(client);
                
                // 读取保持寄存器
                ushort[] registers = modbusClient.ReadHoldingRegisters(
                    unitId, 0, 10);
                
                return registers;
            }
        }
    }
    ```

## 📚 相关标准

### 官方规范

- **Modbus Messaging on TCP/IP Implementation Guide V1.0b**
- **Modbus Application Protocol Specification V1.1b3**
- **IEC 61158** - 工业通信网络现场总线规范

### 网络标准

- **RFC 793** - TCP协议规范
- **RFC 791** - IP协议规范
- **IEEE 802.3** - 以太网标准

---

!!! success "总结"
    Modbus TCP 协议结合了传统的 Modbus 应用层协议和现代的 TCP/IP 网络技术，为工业自动化系统提供了灵活、可靠的通信解决方案。

**相关文档**:

- **[功能码详解](function-codes.md)** - 功能码的详细说明
- **[响应结构详解](response-structures.md)** - 响应数据格式说明
- **[应用示例](application-examples.md)** - 实际应用案例
- **[RTU规范](rtu-specification.md)** - RTU协议详细规范