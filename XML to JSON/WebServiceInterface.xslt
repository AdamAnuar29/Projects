<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>IAuthService</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Method</th>
      <th style="text-align:left">Return type</th>
      <th style="text-align:left">Input parameters</th>
      <th style="text-align:left">Number of exceptions</th>
    </tr>
    <xsl:for-each select="ServiceInterface/abstract_method">
    <tr>
      <td><xsl:value-of select="@id"/></td>
      <td><xsl:value-of select="return"/></td>


      <td>
<xsl:for-each select="parameterList/parameter">
<xsl:value-of select="."/>;<xsl:value-of select="@type"/>, 
</xsl:for-each>
      </td>


      <td><xsl:value-of select="count(exceptions/throws)"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>

