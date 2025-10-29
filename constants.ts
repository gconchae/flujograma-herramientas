import type { FlowchartSection } from './types';

export const flowchartData: FlowchartSection[] = [
  {
    title: 'FASE 1: ANÁLISIS DESCRIPTIVO Y SUPUESTOS',
    color: 'blue',
    nodes: [
      [{ id: 'descriptives', title: 'Estadísticos Descriptivos', subtitle: 'Media - Mediana - DE - RIQ' }, { id: 'normality', title: 'Normalidad', subtitle: 'Shapiro-Wilk' }]
    ],
  },
  {
    title: 'FASE 2: VALIDACIÓN DEL INSTRUMENTO',
    color: 'blue',
    nodes: [
        [{ id: 'internal-consistency', title: 'Consistencia Interna', subtitle: 'Alfa de Cronbach / Omega' }, { id: 'factor-analysis', title: 'Estructura Factorial', subtitle: 'Análisis Factorial Confirmatorio (AFC)' }, { id: 'content-validity', title: 'Validez de Contenido', subtitle: 'I-CVI' }]
    ],
  },
  {
    title: 'ANÁLISIS NO PARAMÉTRICO',
    color: 'green',
    nodes: [
        [{ id: 'mann-whitney', title: 'Test U de Mann-Whitney', subtitle: '2 grupos independientes', colSpan: 1 }, { id: 'wilcoxon', title: 'Test de Wilcoxon', subtitle: '2 momentos relacionados', colSpan: 1 }, { id: 'kruskal-wallis', title: 'Test de Kruskal-Wallis', subtitle: '3+ grupos independientes', colSpan: 1 }],
        [null, null, null],
        [null, null, null],
        [null, null, { id: 'dunn', title: "Prueba Post-Hoc de Dunn", subtitle: 'Post-Hoc', colSpan: 1 }]
    ],
  },
  {
    title: 'TAMAÑO DEL EFECTO',
    color: 'red',
    nodes: [
      [{ id: 'rosenthal', title: 'r de Rosenthal', subtitle: 'Mann-Whitney / Wilcoxon' }, { id: 'cliff', title: 'δ de Cliff', subtitle: 'Alternativa robusta' }],
      [{ id: 'eta-squared', title: 'η² - Eta²', subtitle: 'Kruskal-Wallis', colSpan: 2 }]
    ],
  },
];

export const modalContent: Record<string, string> = {
    'descriptives': `### ¿Qué es?
Los estadísticos descriptivos son medidas que resumen y caracterizan las propiedades principales de un conjunto de datos, incluyendo tendencia central, dispersión y forma distribucional.

### Aplicación en nuestro estudio
Calculamos medias, medianas, desviaciones estándar, rangos intercuartílicos, asimetría y curtosis para todos los puntajes de la ECA por grupo y momento de medición. Por ejemplo, encontramos que el grupo experimental inició con M=5.500 en cognitiva, M=24.21 en afectiva y M=19.76 en conductual en el pretest.

### Consideraciones metodológicas
Reportamos tanto medias (para comparabilidad con literatura) como medianas (más apropiadas para datos ordinales). La inspección de asimetría y curtosis nos alertó sobre posibles violaciones de normalidad que luego confirmamos con pruebas formales de Shapiro-Wilk.

### Interpretación de nuestros resultados
Los estadísticos descriptivos nos permitieron caracterizar la línea base de conciencia ecológica (conocimiento bajo-moderado, actitudes altas, prácticas moderadas) y contextualizar los cambios post-intervención en términos de puntos de partida diferenciales entre grupos.`,
    'normality': `### ¿Qué es?
Los tests de normalidad evalúan si una distribución de datos se ajusta a una distribución normal gaussiana, determinando la adecuación de pruebas estadísticas paramétricas.

### Aplicación en nuestro estudio
Aplicamos la prueba de Shapiro-Wilk a los puntajes de las tres dimensiones de la ECA, desagregados por grupo y momento de medición. Encontramos que la mayoría de distribuciones mostraban p<.05, indicando desviaciones significativas de la normalidad, especialmente en las dimensiones cognitiva y afectiva.

### Consideraciones metodológicas
Optamos por Shapiro-Wilk sobre Kolmogorov-Smirnov debido a su mayor potencia estadística con muestras menores a 50 participantes, como era el caso de nuestro grupo control (n=26). Este análisis justificó el uso de pruebas no paramétricas en nuestros análisis inferenciales.

### Interpretación de nuestros resultados
Interpretamos p<.05 como evidencia de no-normalidad. Este hallazgo fue metodológicamente crucial, ya que determinó nuestra elección de pruebas no paramétricas (Mann-Whitney, Wilcoxon, Kruskal-Wallis) para todos los análisis comparativos en nuestra investigación.`,
    'internal-consistency': `### ¿Qué es?
El coeficiente Alfa de Cronbach evalúa la consistencia interna de los ítems que componen una escala o subescala, indicando en qué medida miden un mismo constructo latente.

### Aplicación en nuestro estudio
Calculamos el Alfa de Cronbach para cada dimensión de la ECA en el pretest. Encontramos valores dispares: α=.626 (afectiva), α=.720 (conductual), pero solo α=.387 en la subescala cognitiva, lo que nos alertó sobre problemas de fiabilidad en esta dimensión específica.

### Consideraciones metodológicas
Verificamos que los ítems midieran constructos unidimensionales. La baja consistencia en cognitiva (α=.387) nos llevó a recomendar en las conclusiones revisar la redacción y adaptación cultural de estos ítems para futuras aplicaciones, considerando incluso el uso del coeficiente KR-20.

### Interpretación de nuestros resultados
Interpretamos que valores por debajo de .70 indican inconsistencia problemática. Por esto, los resultados de la dimensión cognitiva se consideraron no concluyentes en nuestra investigación, a pesar de mostrar diferencias estadísticamente significativas en los análisis inferenciales.

### Medida Complementaria: Omega de McDonald
El coeficiente Omega de McDonald es una medida de fiabilidad de consistencia interna que supera algunas limitaciones del Alfa de Cronbach. Calculamos el Omega junto con el Alfa, encontrando valores muy similares: ω=.629 (afectiva) vs α=.626, y ω=.727 (conductual) vs α=.720, lo que confirmó la robustez de nuestras mediciones en estas dimensiones.`,
    'content-validity': `### ¿Qué es?
La validez de contenido evalúa el grado en que los ítems de un instrumento representan adecuadamente el dominio conceptual completo del constructo que se pretende medir.

### Aplicación en nuestro estudio
Evaluamos la validez de contenido de la ECA mediante juicio de expertos en educación ambiental y psicometría. Calculamos el Índice de Validez de Contenido (I-CVI) para cada ítem y el Scale-CVI promedio, obteniendo valores superiores a 0.78 que indicaron adecuada representatividad del constructo.

### Consideraciones metodológicas
Utilizamos un panel de 5 expertos que evaluaron cada ítem en términos de relevancia, claridad y representatividad del constructo. Este proceso nos permitió refinar la redacción de ítems ambiguos antes de la aplicación piloto.

### Interpretación de nuestros resultados
Los altos valores de I-CVI y S-CVI nos dieron confianza en que la ECA mide efectivamente los dominios conceptuales de la conciencia ecológica según nuestra definición teórica, fortaleciendo así las inferencias derivadas de nuestros análisis.`,
    'factor-analysis': `### ¿Qué es?
El Análisis Factorial Confirmatorio (AFC) es una técnica estadística que prueba si la estructura factorial preconcebida de un instrumento se ajusta adecuadamente a los datos observados.

### Aplicación en nuestro estudio
Realizamos AFC para verificar la estructura trifactorial de la ECA (cognitiva, afectiva, conductual) utilizando software especializado. Los índices de ajuste obtenidos (CFI > 0.90, RMSEA < 0.08) respaldaron la validez estructural del instrumento en nuestro contexto.

### Consideraciones metodológicas
Optamos por AFC sobre Análisis Factorial Exploratorio porque teníamos una estructura teórica preconcebida basada en la literatura. Utilizamos estimadores robustos apropiados para datos ordinales.

### Interpretación de nuestros resultados
El adecuado ajuste del AFC confirmó que las tres dimensiones de la ECA representan constructos distintos pero relacionados, validando nuestra aproximación multidimensional a la conciencia ecológica y justificando el análisis por dimensiones separadas.`,
    'mann-whitney': `### ¿Qué es?
La prueba U de Mann-Whitney es la alternativa no paramétrica a la t-test para muestras independientes, utilizada cuando no se cumplen los supuestos de normalidad o homocedasticidad.

### Aplicación en nuestro estudio
La aplicamos para comparar los puntajes postest entre grupo experimental (n=63) y grupo control (n=26) en las tres dimensiones de la ECA. En la dimensión afectiva obtuvimos U=339.5, p<.0001, confirmando diferencias significativas a favor del grupo que recibió la intervención curricular.

### Consideraciones metodológicas
Optamos por esta prueba tras confirmar no-normalidad mediante Shapiro-Wilk (p<.05 en cognitiva y afectiva). La naturaleza ordinal de los datos y la falta de homocedasticidad justificaron esta elección metodológica en nuestro diseño cuasiexperimental.

### Interpretación de nuestros resultados
Interpretamos que valores p<.05 indican diferencias estadísticamente significativas entre grupos. Complementamos esta interpretación con el tamaño del efecto r=0.59 en afectiva, que evidenció un impacto grande de la intervención más allá de la significancia estadística.`,
    'wilcoxon': `### ¿Qué es?
La prueba de rangos con signo de Wilcoxon es la alternativa no paramétrica a la t-test para muestras relacionadas, utilizada para comparar mediciones pretest-postest dentro de un mismo grupo.

### Aplicación en nuestro estudio
Aplicamos el test de Wilcoxon para evaluar los cambios intra-grupo en el grupo experimental. En la dimensión cognitiva encontramos W=41.00, p<.001, indicando una mejora muy significativa tras la intervención, aunque interpretamos este resultado con cautela por la baja fiabilidad de la subescala.

### Consideraciones metodológicas
Utilizamos esta prueba porque nuestros datos no cumplían el supuesto de normalidad requerido para pruebas paramétricas. Calculamos el tamaño del efecto asociado mediante r = |Z|/√N para contextualizar la significancia estadística.

### Interpretación de nuestros resultados
Interpretamos las diferencias pretest-postest como evidencia del impacto de la intervención. El tamaño del efecto r=0.82 en cognitiva sugirió un cambio sustancial, aunque la baja fiabilidad (α=.387) nos obligó a ser conservadores en las conclusiones sobre aprendizaje conceptual.`,
    'kruskal-wallis': `### ¿Qué es?
La prueba H de Kruskal-Wallis es la alternativa no paramétrica al ANOVA de un factor, utilizada para comparar tres o más grupos independientes cuando no se cumplen supuestos de normalidad.

### Aplicación en nuestro estudio
Aplicamos Kruskal-Wallis para evaluar diferencias entre los tres cursos participantes (8° Uno, 8° Dos y 8° Tres). No encontramos diferencias significativas en ninguna dimensión (p>.36 en todos los casos), lo que sugirió homogeneidad en la respuesta a la intervención entre cursos.

### Consideraciones metodológicas
Utilizamos esta prueba para verificar que el efecto de la intervención fue homogéneo a través de los diferentes subgrupos que conformaban nuestra muestra, fortaleciendo así la validez interna de nuestros hallazgos principales.

### Interpretación de nuestros resultados
La ausencia de diferencias significativas entre cursos (p>.36) nos permitió concluir que la intervención tuvo un efecto consistente en cada uno de los diferentes grupos participantes, lo que fortalece la generalización interna de nuestros resultados.`,
    'dunn': `### ¿Qué es?
La prueba de Dunn es un procedimiento post-hoc utilizado después de un Kruskal-Wallis significativo para identificar qué pares de grupos difieren específicamente, controlando las comparaciones múltiples.

### Aplicación en nuestro estudio
Aplicamos la prueba de Dunn como análisis post-hoc tras el Kruskal-Wallis, aunque en nuestro caso no fue necesaria su aplicación exhaustiva ya que el Kruskal-Wallis no mostró diferencias significativas entre los tres cursos (8° Uno, 8° Dos y 8° Tres) en ninguna dimensión (p > .36 en todos los casos).

### Consideraciones metodológicas
Teníamos preparado el procedimiento de Dunn como parte de nuestro plan analítico para el escenario donde Kruskal-Wallis resultara significativo. Utilizamos la corrección de Bonferroni para ajustar los valores p en las comparaciones por pares, que es el enfoque estándar en esta prueba.

### Interpretación de nuestros resultados
Dado que nuestro Kruskal-Wallis no fue significativo, no procedimos con las comparaciones post-hoc de Dunn. Esto reforzó nuestra conclusión de que la intervención tuvo efectos homogéneos en todos los diferentes cursos participantes, lo cual es un hallazgo positivo para la validez interna del estudio.`,
    'rosenthal': `### ¿Qué es?
El r de Rosenthal es una medida del tamaño del efecto utilizada como complemento a pruebas no paramétricas como Mann-Whitney y Wilcoxon, representando la magnitud estandarizada de las diferencias encontradas.

### Aplicación en nuestro estudio
Calculamos el r de Rosenthal para todas las comparaciones significativas mediante la fórmula r = Z/√N. En la dimensión afectiva obtuvimos r=0.59 (comparación intergrupo), mientras que en la dimensión conductual el valor fue r=0.27. Estos cálculos nos permitieron evaluar la relevancia práctica más allá de la significancia estadística.

### Consideraciones metodológicas
Optamos por reportar sistemáticamente el r de Rosenthal junto con los valores p, siguiendo las recomendaciones contemporáneas de reporting en investigación educativa. Utilizamos los puntos de corte de Cohen (1988) para la interpretación estandarizada.

### Interpretación de nuestros resultados
En nuestro estudio, interpretamos que r=0.59 en la dimensión afectiva representaba un efecto grande, confirmando el impacto sustancial de la intervención en las actitudes ambientales. Por otro lado, r=0.27 en la dimensión conductual indicaba un efecto pequeño-moderado, lo que coincidió con la persistencia de la brecha actitud-conducta que documentamos en nuestras conclusiones.`,
    'cliff': `### ¿Qué es?
El delta de Cliff (δ) es una medida robusta del tamaño del efecto para comparaciones entre dos grupos independientes, que estima la probabilidad de que una observación aleatoria de un grupo sea mayor que una observación del otro grupo.

### Aplicación en nuestro estudio
Calculamos el delta de Cliff como alternativa al r de Rosenthal para las comparaciones Mann-Whitney, encontrando valores consistentes con nuestros hallazgos principales. Por ejemplo, en la dimensión afectiva obtuvimos un δ que confirmó la superioridad del grupo experimental.

### Consideraciones metodológicas
Utilizamos δ porque es menos sensible a outliers y violaciones de supuestos que otras medidas de tamaño del efecto. Su interpretación en términos de probabilidad (P(X > Y) - P(Y > X)) resulta intuitiva para audiencias no técnicas.

### Interpretación de nuestros resultados
Interpretamos |δ|>0.47 como efecto grande, >0.33 como efecto medio, y >0.14 como efecto pequeño. Nuestros valores se alinearon con esta clasificación, reforzando la validez de nuestras conclusiones sobre el impacto diferencial de la intervención.`,
    'eta-squared': `### ¿Qué es?
El Eta cuadrado (η²) es una medida del tamaño del efecto utilizado en ANOVA y su alternativa no paramétrica Kruskal-Wallis, indicando la proporción de varianza total explicada por las diferencias entre grupos.

### Aplicación en nuestro estudio
Calculamos ε² (épsilon cuadrado) como versión menos sesgada del eta cuadrado para el Kruskal-Wallis. Encontramos valores de ε²=0.127 (cognitiva), ε²=0.216 (afectiva) y ε²=0.046 (conductual), que confirmaron los patrones observados con el r de Rosenthal.

### Consideraciones metodológicas
Optamos por ε² sobre η² por su menor sesgo en muestras pequeñas. Seguimos los puntos de corte de Cohen (1988) donde ε²≥0.14 indica efecto grande, ≥0.06 efecto moderado, y ≥0.01 efecto pequeño.

### Interpretación de nuestros resultados
ε²=0.216 en afectiva confirmó un efecto grande coherente con r=0.59, mientras ε²=0.046 en conductual reflejó el efecto pequeño-moderado ya identificado, proporcionando evidencia convergente sobre la magnitud del impacto de la intervención.`
};